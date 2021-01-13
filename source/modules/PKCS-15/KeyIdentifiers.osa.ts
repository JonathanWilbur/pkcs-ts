/* eslint-disable */
import { issuerAndSerialNumber } from "../PKCS-15/issuerAndSerialNumber.oa";
import { issuerAndSerialNumberHash } from "../PKCS-15/issuerAndSerialNumberHash.oa";
import { issuerKeyHash } from "../PKCS-15/issuerKeyHash.oa";
import { issuerNameHash } from "../PKCS-15/issuerNameHash.oa";
import { KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca";
import { subjectKeyHash } from "../PKCS-15/subjectKeyHash.oa";
import { subjectKeyId } from "../PKCS-15/subjectKeyId.oa";
import { subjectNameHash } from "../PKCS-15/subjectNameHash.oa";
export { issuerAndSerialNumber } from "../PKCS-15/issuerAndSerialNumber.oa";
export { issuerAndSerialNumberHash } from "../PKCS-15/issuerAndSerialNumberHash.oa";
export { issuerKeyHash } from "../PKCS-15/issuerKeyHash.oa";
export { issuerNameHash } from "../PKCS-15/issuerNameHash.oa";
export { KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca";
export { subjectKeyHash } from "../PKCS-15/subjectKeyHash.oa";
export { subjectKeyId } from "../PKCS-15/subjectKeyId.oa";
export { subjectNameHash } from "../PKCS-15/subjectNameHash.oa";

/* START_OF_SYMBOL_DEFINITION KeyIdentifiers */
/**
 * @summary KeyIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyIdentifiers KEY-IDENTIFIER ::= {
 *     issuerAndSerialNumber
 *     | issuerAndSerialNumberHash
 *     | subjectKeyId
 *     | subjectKeyHash
 *     | issuerKeyHash
 *     | issuerNameHash
 *     | subjectNameHash, ...
 * }
 * ```
 *
 * @constant
 * @type {KEY_IDENTIFIER[]}
 *
 */
export const KeyIdentifiers: KEY_IDENTIFIER[] = [
    issuerAndSerialNumber,
    issuerAndSerialNumberHash,
    subjectKeyId,
    subjectKeyHash,
    issuerKeyHash,
    issuerNameHash,
    subjectNameHash,
];
/* END_OF_SYMBOL_DEFINITION KeyIdentifiers */

/* eslint-enable */
