import * as FirebaseFirestore from '@google-cloud/firestore';
/**
 * Initialize in your index.ts.
 * @param adminOptions functions.config().firebase
 */
export declare const initialize: (_firestore: FirebaseFirestore.Firestore) => void;
/**
 * When called `markCompleted()`, CompletedError will be thrown if id is already completed.
 */
export declare class CompletedError extends Error {
    id: string;
    name: 'CompletedError';
    message: string;
    stack?: string;
    constructor(id: string);
    toString(): string;
}
/**
 * Retun true if `id` is completed.
 * @param data event.data.data()
 * @param id id
 */
export declare const isCompleted: (data: any, id: string) => boolean;
/**
 * Record completed when one process is complete.
 * Since this process uses Transaction, it takes time to complete, be careful.
 * @param ref event.data.ref
 * @param id id
 */
export declare const markCompleted: (ref: FirebaseFirestore.DocumentReference, id: string) => Promise<{
    [id: string]: boolean;
}>;
/**
 * Remove id from data.completed.
 * @param ref event.data.ref
 * @param data event.data.data()
 * @param id id
 */
export declare const remove: (ref: FirebaseFirestore.DocumentReference, id: string) => Promise<{
    [id: string]: boolean;
}>;
/**
 * Clear completed.
 * @param ref event.data.ref
 */
export declare const clear: (ref: FirebaseFirestore.DocumentReference) => Promise<{}>;
