/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import { friendlyName } from "../PKCS-9/friendlyName.oa";
import { localKeyId } from "../PKCS-9/localKeyId.oa";

/* START_OF_SYMBOL_DEFINITION PKCS12AttrSet */
/**
 * @summary PKCS12AttrSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS12AttrSet ATTRIBUTE ::= {
 *     friendlyName |
 *     localKeyId,
 *     ... -- Other attributes are allowed
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const PKCS12AttrSet: ATTRIBUTE[] = [friendlyName, localKeyId];
/* END_OF_SYMBOL_DEFINITION PKCS12AttrSet */

/* eslint-enable */
