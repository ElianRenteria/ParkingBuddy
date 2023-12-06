"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var lite_1 = require("firebase/firestore/lite");
var FirebaseConfig_1 = require("../constants/FirebaseConfig");
var FirebaseClient = /** @class */ (function () {
    function FirebaseClient() {
        var firebaseApp = (0, app_1.initializeApp)(FirebaseConfig_1.default);
        this.firestore = (0, lite_1.getFirestore)(firebaseApp);
    }
    FirebaseClient.prototype.getCollection = function (collectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var collectionRef, querySnapshot, result_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        collectionRef = (0, lite_1.collection)(this.firestore, collectionName);
                        return [4 /*yield*/, (0, lite_1.getDocs)(collectionRef)];
                    case 1:
                        querySnapshot = _a.sent();
                        result_1 = [];
                        querySnapshot.forEach(function (doc) {
                            result_1.push(doc.data());
                        });
                        return [2 /*return*/, result_1];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error while fetching collection:', error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseClient.prototype.getDocument = function (collectionName, documentId, fieldName) {
        return __awaiter(this, void 0, void 0, function () {
            var documentRef, documentSnapshot, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        documentRef = (0, lite_1.doc)(this.firestore, collectionName, documentId);
                        return [4 /*yield*/, (0, lite_1.getDoc)(documentRef)];
                    case 1:
                        documentSnapshot = _a.sent();
                        if (documentSnapshot.exists()) {
                            data = documentSnapshot.data();
                            return [2 /*return*/, fieldName ? data === null || data === void 0 ? void 0 : data[fieldName] : data];
                        }
                        else {
                            console.error('Document does not exist');
                            return [2 /*return*/, undefined];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error('Error while fetching document:', error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseClient.prototype.updateDocument = function (collectionName, documentId, newData) {
        return __awaiter(this, void 0, void 0, function () {
            var documentRef, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        documentRef = (0, lite_1.doc)(this.firestore, collectionName, documentId);
                        return [4 /*yield*/, (0, lite_1.updateDoc)(documentRef, newData)];
                    case 1:
                        _a.sent();
                        console.log('Document updated successfully');
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.error('Error while updating document:', error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseClient.prototype.addDocument = function (collectionName, data, documentId) {
        return __awaiter(this, void 0, void 0, function () {
            var collectionRef, documentRef, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        collectionRef = (0, lite_1.collection)(this.firestore, collectionName);
                        if (!documentId) return [3 /*break*/, 2];
                        documentRef = (0, lite_1.doc)(this.firestore, collectionName, documentId);
                        return [4 /*yield*/, (0, lite_1.setDoc)(documentRef, data)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, (0, lite_1.addDoc)(collectionRef, data)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        console.log('Document added successfully');
                        return [3 /*break*/, 6];
                    case 5:
                        error_4 = _a.sent();
                        console.error('Error while adding document:', error_4);
                        throw error_4;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseClient.prototype.deleteDocument = function (collectionName, documentId) {
        return __awaiter(this, void 0, void 0, function () {
            var documentRef, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        documentRef = (0, lite_1.doc)(this.firestore, collectionName, documentId);
                        return [4 /*yield*/, (0, lite_1.deleteDoc)(documentRef)];
                    case 1:
                        _a.sent();
                        console.log('Document deleted successfully');
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.error('Error while deleting document:', error_5);
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseClient.prototype.searchDocument = function (collectionName, fieldName, operator, value) {
        return __awaiter(this, void 0, void 0, function () {
            var collectionRef, q, querySnapshot, result_2, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        collectionRef = (0, lite_1.collection)(this.firestore, collectionName);
                        q = (0, lite_1.query)(collectionRef, (0, lite_1.where)(fieldName, operator, value));
                        return [4 /*yield*/, (0, lite_1.getDocs)(q)];
                    case 1:
                        querySnapshot = _a.sent();
                        result_2 = [];
                        querySnapshot.forEach(function (doc) {
                            result_2.push(doc.data());
                        });
                        return [2 /*return*/, result_2];
                    case 2:
                        error_6 = _a.sent();
                        console.error('Error while searching for document:', error_6);
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FirebaseClient;
}());
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var result2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, firebaseClient.getDocument('Users', 'email')];
                case 1:
                    result2 = _a.sent();
                    console.log(result2);
                    return [2 /*return*/];
            }
        });
    });
}
var firebaseClient = new FirebaseClient();
test();
exports.default = firebaseClient;
