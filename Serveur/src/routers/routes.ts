/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AnimalController } from './../Controllers/AnimalController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SpeciesController } from './../Controllers/SpeciesController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TrackerController } from './../Controllers/TrackerController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../Controllers/UserController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ZoneController } from './../Controllers/ZoneController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AgricoleStatController } from './../Controllers/AgricoleStatController';
import type { RequestHandler } from 'express';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "ObjectId": {
        "dataType": "refAlias",
        "type": { "dataType": "string", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAnimal": {
        "dataType": "refObject",
        "properties": {
            "_id": { "ref": "ObjectId", "required": true },
            "name": { "dataType": "string", "required": true },
            "birthdate": { "dataType": "datetime", "required": true },
            "speciesID": { "ref": "ObjectId", "required": true },
            "userID": { "ref": "ObjectId", "required": true },
            "trackerID": { "ref": "ObjectId" },
            "description": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IAnimal.Exclude_keyofIAnimal._id-or-trackerID__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "birthdate": { "dataType": "datetime", "required": true }, "speciesID": { "ref": "ObjectId", "required": true }, "userID": { "ref": "ObjectId", "required": true }, "description": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICreateAnimal": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "birthdate": { "dataType": "datetime", "required": true },
            "speciesID": { "ref": "ObjectId", "required": true },
            "userID": { "ref": "ObjectId", "required": true },
            "description": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_IAnimal_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "ref": "ObjectId" }, "name": { "dataType": "string" }, "birthdate": { "dataType": "datetime" }, "speciesID": { "ref": "ObjectId" }, "userID": { "ref": "ObjectId" }, "trackerID": { "ref": "ObjectId" }, "description": { "dataType": "string" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISpecies": {
        "dataType": "refObject",
        "properties": {
            "_id": { "ref": "ObjectId", "required": true },
            "name": { "dataType": "string", "required": true },
            "icon": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_ISpecies.Exclude_keyofISpecies._id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "icon": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICreateSpecies": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "icon": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ITracker": {
        "dataType": "refObject",
        "properties": {
            "_id": { "ref": "ObjectId", "required": true },
            "animalId": { "ref": "ObjectId" },
            "userId": { "ref": "ObjectId", "required": true },
            "latitude": { "dataType": "double", "required": true },
            "longitude": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_ITracker.Exclude_keyofITracker._id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "animalId": { "ref": "ObjectId" }, "userId": { "ref": "ObjectId", "required": true }, "latitude": { "dataType": "double", "required": true }, "longitude": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICreateTracker": {
        "dataType": "refObject",
        "properties": {
            "animalId": { "ref": "ObjectId" },
            "userId": { "ref": "ObjectId", "required": true },
            "latitude": { "dataType": "double", "required": true },
            "longitude": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_ITracker_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "ref": "ObjectId" }, "animalId": { "ref": "ObjectId" }, "userId": { "ref": "ObjectId" }, "latitude": { "dataType": "double" }, "longitude": { "dataType": "double" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPoint": {
        "dataType": "refObject",
        "properties": {
            "latitude": { "dataType": "double", "required": true },
            "longitude": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IUser": {
        "dataType": "refObject",
        "properties": {
            "_id": { "ref": "ObjectId", "required": true },
            "username": { "dataType": "string", "required": true },
            "firstname": { "dataType": "string", "required": true },
            "lastname": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "animalsId": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ObjectId" }, "required": true },
            "trackersId": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ObjectId" }, "required": true },
            "zonesId": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ObjectId" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_IUser_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "ref": "ObjectId" }, "username": { "dataType": "string" }, "firstname": { "dataType": "string" }, "lastname": { "dataType": "string" }, "password": { "dataType": "string" }, "animalsId": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ObjectId" } }, "trackersId": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ObjectId" } }, "zonesId": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ObjectId" } } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ILoginCredentials": {
        "dataType": "refObject",
        "properties": {
            "username": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ZONE_TYPE": {
        "dataType": "refEnum",
        "enums": [0, 1],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IZone": {
        "dataType": "refObject",
        "properties": {
            "_id": { "ref": "ObjectId", "required": true },
            "color": { "dataType": "string", "required": true },
            "points": { "dataType": "array", "array": { "dataType": "refObject", "ref": "IPoint" }, "required": true },
            "name": { "dataType": "string", "required": true },
            "userId": { "ref": "ObjectId", "required": true },
            "type": { "ref": "ZONE_TYPE", "required": true },
            "speciesId": { "ref": "ObjectId", "required": true },
            "animalsId": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ObjectId" }, "required": true },
            "agricoleStatId": { "ref": "ObjectId", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IZone.Exclude_keyofIZone._id-or-speciesId-or-animalsId-or-agricoleStatId__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "userId": { "ref": "ObjectId", "required": true }, "color": { "dataType": "string", "required": true }, "points": { "dataType": "array", "array": { "dataType": "refObject", "ref": "IPoint" }, "required": true }, "type": { "ref": "ZONE_TYPE", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICreateZone": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "userId": { "ref": "ObjectId", "required": true },
            "color": { "dataType": "string", "required": true },
            "points": { "dataType": "array", "array": { "dataType": "refObject", "ref": "IPoint" }, "required": true },
            "type": { "ref": "ZONE_TYPE", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_IZone_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "ref": "ObjectId" }, "color": { "dataType": "string" }, "points": { "dataType": "array", "array": { "dataType": "refObject", "ref": "IPoint" } }, "name": { "dataType": "string" }, "userId": { "ref": "ObjectId" }, "type": { "ref": "ZONE_TYPE" }, "speciesId": { "ref": "ObjectId" }, "animalsId": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ObjectId" } }, "agricoleStatId": { "ref": "ObjectId" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAgricoleStat": {
        "dataType": "refObject",
        "properties": {
            "_id": { "ref": "ObjectId", "required": true },
            "userId": { "ref": "ObjectId", "required": true },
            "humidity": { "dataType": "double", "required": true },
            "sun": { "dataType": "double", "required": true },
            "airPurity": { "dataType": "double", "required": true },
            "lastRecolt": { "dataType": "datetime", "required": true },
            "lastProduit": { "dataType": "string", "required": true },
            "typeAgriculture": { "dataType": "string", "required": true },
            "vegetable": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_IAgricoleStat_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "ref": "ObjectId" }, "userId": { "ref": "ObjectId" }, "humidity": { "dataType": "double" }, "sun": { "dataType": "double" }, "airPurity": { "dataType": "double" }, "lastRecolt": { "dataType": "datetime" }, "lastProduit": { "dataType": "string" }, "typeAgriculture": { "dataType": "string" }, "vegetable": { "dataType": "string" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/animal/create',
        ...(fetchMiddlewares<RequestHandler>(AnimalController)),
        ...(fetchMiddlewares<RequestHandler>(AnimalController.prototype.create)),

        function AnimalController_create(request: any, response: any, next: any) {
            const args = {
                createObject: { "in": "body", "name": "createObject", "required": true, "ref": "ICreateAnimal" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AnimalController();


                const promise = controller.create.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/animal/user/:userId',
        ...(fetchMiddlewares<RequestHandler>(AnimalController)),
        ...(fetchMiddlewares<RequestHandler>(AnimalController.prototype.gets)),

        function AnimalController_gets(request: any, response: any, next: any) {
            const args = {
                userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AnimalController();


                const promise = controller.gets.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/animal/zone/:zoneId',
        ...(fetchMiddlewares<RequestHandler>(AnimalController)),
        ...(fetchMiddlewares<RequestHandler>(AnimalController.prototype.getByZone)),

        function AnimalController_getByZone(request: any, response: any, next: any) {
            const args = {
                zoneId: { "in": "path", "name": "zoneId", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AnimalController();


                const promise = controller.getByZone.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/animal/species/:speciesId',
        ...(fetchMiddlewares<RequestHandler>(AnimalController)),
        ...(fetchMiddlewares<RequestHandler>(AnimalController.prototype.getBySpecies)),

        function AnimalController_getBySpecies(request: any, response: any, next: any) {
            const args = {
                speciesId: { "in": "path", "name": "speciesId", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AnimalController();


                const promise = controller.getBySpecies.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/animal/:_id',
        ...(fetchMiddlewares<RequestHandler>(AnimalController)),
        ...(fetchMiddlewares<RequestHandler>(AnimalController.prototype.get)),

        function AnimalController_get(request: any, response: any, next: any) {
            const args = {
                _id: { "in": "path", "name": "_id", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AnimalController();


                const promise = controller.get.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/animal/delete/:_id',
        ...(fetchMiddlewares<RequestHandler>(AnimalController)),
        ...(fetchMiddlewares<RequestHandler>(AnimalController.prototype.delete)),

        function AnimalController_delete(request: any, response: any, next: any) {
            const args = {
                _id: { "in": "path", "name": "_id", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AnimalController();


                const promise = controller.delete.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/animal/update',
        ...(fetchMiddlewares<RequestHandler>(AnimalController)),
        ...(fetchMiddlewares<RequestHandler>(AnimalController.prototype.update)),

        function AnimalController_update(request: any, response: any, next: any) {
            const args = {
                updateObject: { "in": "body", "name": "updateObject", "required": true, "dataType": "intersection", "subSchemas": [{ "ref": "Partial_IAnimal_" }, { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "string", "required": true } } }] },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                // validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AnimalController();


                const promise = controller.update(request.body);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/species/create',
        ...(fetchMiddlewares<RequestHandler>(SpeciesController)),
        ...(fetchMiddlewares<RequestHandler>(SpeciesController.prototype.create)),

        function SpeciesController_create(request: any, response: any, next: any) {
            const args = {
                createObject: { "in": "body", "name": "createObject", "required": true, "ref": "ICreateSpecies" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SpeciesController();


                const promise = controller.create.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/species',
        ...(fetchMiddlewares<RequestHandler>(SpeciesController)),
        ...(fetchMiddlewares<RequestHandler>(SpeciesController.prototype.gets)),

        function SpeciesController_gets(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SpeciesController();


                const promise = controller.gets.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/species/:_id',
        ...(fetchMiddlewares<RequestHandler>(SpeciesController)),
        ...(fetchMiddlewares<RequestHandler>(SpeciesController.prototype.get)),

        function SpeciesController_get(request: any, response: any, next: any) {
            const args = {
                _id: { "in": "path", "name": "_id", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SpeciesController();


                const promise = controller.get.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/species/delete/:_id',
        ...(fetchMiddlewares<RequestHandler>(SpeciesController)),
        ...(fetchMiddlewares<RequestHandler>(SpeciesController.prototype.delete)),

        function SpeciesController_delete(request: any, response: any, next: any) {
            const args = {
                _id: { "in": "path", "name": "_id", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SpeciesController();


                const promise = controller.delete.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/tracker/user/:userId',
        ...(fetchMiddlewares<RequestHandler>(TrackerController)),
        ...(fetchMiddlewares<RequestHandler>(TrackerController.prototype.gets)),

        function TrackerController_gets(request: any, response: any, next: any) {
            const args = {
                userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TrackerController();


                const promise = controller.gets.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/tracker/create',
        ...(fetchMiddlewares<RequestHandler>(TrackerController)),
        ...(fetchMiddlewares<RequestHandler>(TrackerController.prototype.create)),

        function TrackerController_create(request: any, response: any, next: any) {
            const args = {
                createObject: { "in": "body", "name": "createObject", "required": true, "ref": "ICreateTracker" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TrackerController();


                const promise = controller.create.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/tracker/:_id',
        ...(fetchMiddlewares<RequestHandler>(TrackerController)),
        ...(fetchMiddlewares<RequestHandler>(TrackerController.prototype.get)),

        function TrackerController_get(request: any, response: any, next: any) {
            const args = {
                _id: { "in": "path", "name": "_id", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TrackerController();


                const promise = controller.get.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/tracker/delete/:_id',
        ...(fetchMiddlewares<RequestHandler>(TrackerController)),
        ...(fetchMiddlewares<RequestHandler>(TrackerController.prototype.delete)),

        function TrackerController_delete(request: any, response: any, next: any) {
            const args = {
                _id: { "in": "path", "name": "_id", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TrackerController();


                const promise = controller.delete.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/tracker/update',
        ...(fetchMiddlewares<RequestHandler>(TrackerController)),
        ...(fetchMiddlewares<RequestHandler>(TrackerController.prototype.update)),

        function TrackerController_update(request: any, response: any, next: any) {
            const args = {
                updateObject: { "in": "body", "name": "updateObject", "required": true, "dataType": "intersection", "subSchemas": [{ "ref": "Partial_ITracker_" }, { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "string", "required": true } } }] },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TrackerController();


                const promise = controller.update.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/tracker/attach/:trackerId/animal/:animalId',
        ...(fetchMiddlewares<RequestHandler>(TrackerController)),
        ...(fetchMiddlewares<RequestHandler>(TrackerController.prototype.attachToAnimal)),

        function TrackerController_attachToAnimal(request: any, response: any, next: any) {
            const args = {
                trackerId: { "in": "path", "name": "trackerId", "required": true, "dataType": "string" },
                animalId: { "in": "path", "name": "animalId", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TrackerController();


                const promise = controller.attachToAnimal.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/tracker/detach/:trackerId',
        ...(fetchMiddlewares<RequestHandler>(TrackerController)),
        ...(fetchMiddlewares<RequestHandler>(TrackerController.prototype.detachAnimal)),

        function TrackerController_detachAnimal(request: any, response: any, next: any) {
            const args = {
                trackerId: { "in": "path", "name": "trackerId", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TrackerController();


                const promise = controller.detachAnimal.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/tracker/position/update/:trackerId',
        ...(fetchMiddlewares<RequestHandler>(TrackerController)),
        ...(fetchMiddlewares<RequestHandler>(TrackerController.prototype.updatePosition)),

        function TrackerController_updatePosition(request: any, response: any, next: any) {
            const args = {
                trackerId: { "in": "path", "name": "trackerId", "required": true, "dataType": "string" },
                point: { "in": "body", "name": "point", "required": true, "ref": "IPoint" },
            };
            //@ts-ignore
            console.log(request.body)
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TrackerController();


                const promise = controller.updatePosition.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/user/update',
        ...(fetchMiddlewares<RequestHandler>(UserController)),
        ...(fetchMiddlewares<RequestHandler>(UserController.prototype.update)),

        function UserController_update(request: any, response: any, next: any) {
            const args = {
                updateObject: { "in": "body", "name": "updateObject", "required": true, "dataType": "intersection", "subSchemas": [{ "ref": "Partial_IUser_" }, { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "ref": "ObjectId" }], "required": true } } }] },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


                const promise = controller.update.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/user/login',
        ...(fetchMiddlewares<RequestHandler>(UserController)),
        ...(fetchMiddlewares<RequestHandler>(UserController.prototype.login)),

        function UserController_login(request: any, response: any, next: any) {
            const args = {
                loginObject: { "in": "body", "name": "loginObject", "required": true, "ref": "ILoginCredentials" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


                const promise = controller.login.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/zone/user/:userId',
        ...(fetchMiddlewares<RequestHandler>(ZoneController)),
        ...(fetchMiddlewares<RequestHandler>(ZoneController.prototype.gets)),

        function ZoneController_gets(request: any, response: any, next: any) {
            const args = {
                userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ZoneController();


                const promise = controller.gets.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/zone/create',
        ...(fetchMiddlewares<RequestHandler>(ZoneController)),
        ...(fetchMiddlewares<RequestHandler>(ZoneController.prototype.create)),

        function ZoneController_create(request: any, response: any, next: any) {
            const args = {
                createObject: { "in": "body", "name": "createObject", "required": true, "ref": "ICreateZone" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ZoneController();


                const promise = controller.create.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/zone/:_id',
        ...(fetchMiddlewares<RequestHandler>(ZoneController)),
        ...(fetchMiddlewares<RequestHandler>(ZoneController.prototype.get)),

        function ZoneController_get(request: any, response: any, next: any) {
            const args = {
                _id: { "in": "path", "name": "_id", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ZoneController();


                const promise = controller.get.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/zone/delete/:_id',
        ...(fetchMiddlewares<RequestHandler>(ZoneController)),
        ...(fetchMiddlewares<RequestHandler>(ZoneController.prototype.delete)),

        function ZoneController_delete(request: any, response: any, next: any) {
            const args = {
                _id: { "in": "path", "name": "_id", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ZoneController();


                const promise = controller.delete.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/zone/:zoneId/point/update',
        ...(fetchMiddlewares<RequestHandler>(ZoneController)),
        ...(fetchMiddlewares<RequestHandler>(ZoneController.prototype.pointUpdate)),

        function ZoneController_pointUpdate(request: any, response: any, next: any) {
            const args = {
                zoneId: { "in": "path", "name": "zoneId", "required": true, "dataType": "string" },
                newPoints: { "in": "body", "name": "newPoints", "required": true, "dataType": "array", "array": { "dataType": "refObject", "ref": "IPoint" } },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ZoneController();


                const promise = controller.pointUpdate.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/zone/update',
        ...(fetchMiddlewares<RequestHandler>(ZoneController)),
        ...(fetchMiddlewares<RequestHandler>(ZoneController.prototype.update)),

        function ZoneController_update(request: express.Request, response: any, next: any) {
            console.log(request.body);
            const args = {
                updateObject: { "in": "body", "name": "updateObject", "required": true, "dataType": "intersection", "subSchemas": [{ "ref": "Partial_IZone_" }, { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "string", "required": true } } }] },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                const controller = new ZoneController();

                //@ts-ignore
                const promise = controller.update(request.body);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/agricole/user/:userId',
        ...(fetchMiddlewares<RequestHandler>(AgricoleStatController)),
        ...(fetchMiddlewares<RequestHandler>(AgricoleStatController.prototype.gets)),

        function AgricoleStatController_gets(request: any, response: any, next: any) {
            const args = {
                userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AgricoleStatController();


                const promise = controller.gets.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/agricole/zone/:zoneId',
        ...(fetchMiddlewares<RequestHandler>(AgricoleStatController)),
        ...(fetchMiddlewares<RequestHandler>(AgricoleStatController.prototype.getByZone)),

        function AgricoleStatController_getByZone(request: any, response: any, next: any) {
            const args = {
                zoneId: { "in": "path", "name": "zoneId", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AgricoleStatController();


                const promise = controller.getByZone.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/agricole/update',
        ...(fetchMiddlewares<RequestHandler>(AgricoleStatController)),
        ...(fetchMiddlewares<RequestHandler>(AgricoleStatController.prototype.update)),

        function AgricoleStatController_update(request: any, response: any, next: any) {
            const args = {
                updateObject: { "in": "body", "name": "updateObject", "required": true, "dataType": "intersection", "subSchemas": [{ "ref": "Partial_IAgricoleStat_" }, { "dataType": "nestedObjectLiteral", "nestedProperties": { "_id": { "dataType": "string", "required": true } } }] },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AgricoleStatController();


                const promise = controller.update.apply(controller, validatedArgs as any);
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown> {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
