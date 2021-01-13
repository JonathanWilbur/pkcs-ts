/* eslint-disable */
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
import { certBag } from "../PKCS-12/certBag.oa";
import { crlBag } from "../PKCS-12/crlBag.oa";
import { keyBag } from "../PKCS-12/keyBag.oa";
import { pkcs8ShroudedKeyBag } from "../PKCS-12/pkcs8ShroudedKeyBag.oa";
import { safeContentsBag } from "../PKCS-12/safeContentsBag.oa";
import { secretBag } from "../PKCS-12/secretBag.oa";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
export { certBag } from "../PKCS-12/certBag.oa";
export { crlBag } from "../PKCS-12/crlBag.oa";
export { keyBag } from "../PKCS-12/keyBag.oa";
export { pkcs8ShroudedKeyBag } from "../PKCS-12/pkcs8ShroudedKeyBag.oa";
export { safeContentsBag } from "../PKCS-12/safeContentsBag.oa";
export { secretBag } from "../PKCS-12/secretBag.oa";

/* START_OF_SYMBOL_DEFINITION PKCS12BagSet */
/**
 * @summary PKCS12BagSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS12BagSet BAG-TYPE ::= {
 *     keyBag |
 *     pkcs8ShroudedKeyBag |
 *     certBag |
 *     crlBag |
 *     secretBag |
 *     safeContentsBag,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {BAG_TYPE[]}
 *
 */
export const PKCS12BagSet: BAG_TYPE<any>[] = [
    keyBag,
    pkcs8ShroudedKeyBag,
    certBag,
    crlBag,
    secretBag,
    safeContentsBag,
];
/* END_OF_SYMBOL_DEFINITION PKCS12BagSet */

/* eslint-enable */
