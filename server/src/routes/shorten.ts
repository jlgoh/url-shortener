import { Express, Request, Response } from 'express';
import { nanoid } from 'nanoid';
import { DatabaseError, Pool, QueryResult } from 'pg';

module.exports = (app: Express, pool: Pool) => {
    // create a shortened url
    app.post('/api/shorten', (req: Request, res: Response) => {
        const { originalUrl } = req.body;

        if (!originalUrl) {
            res.status(400).json({
                error: 'Url is required',
            });
            return;
        }

        const shortUrl = nanoid(6);

        // save to DB
        pool.query(
            'INSERT into url ("originalUrl", "shortUrl") VALUES ($1, $2) RETURNING *',
            [originalUrl, shortUrl],
            (error: DatabaseError, results: QueryResult) => {
                if (error) {
                    throw error;
                }

                if (results.rows.length) {
                    res.send(results.rows[results.rows.length - 1]);
                }
            }
        );
    });

    // get a shortened url if it exists
    app.get('/api/shorten', (req: Request, res: Response): void => {
        const { originalUrl } = req.query;

        // if input url is not provided
        if (!originalUrl) {
            res.status(400).json({
                error: 'Query parameter url is required',
            });
            return;
        }
        pool.query(
            `SELECT * from url WHERE "originalUrl" = '${originalUrl}';`,
            (error: DatabaseError, results: QueryResult) => {
                if (error) {
                    throw error;
                }

                // if url does not exist
                if (!results.rows.length) {
                    res.status(404).json({
                        error: 'Url does not exist',
                    });
                    return;
                }

                // send latest copy
                res.send(results.rows[results.rows.length - 1]);
            }
        );
    });
};
