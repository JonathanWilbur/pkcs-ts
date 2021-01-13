/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { PFX, _decode_PFX, _encode_PFX } from "../PKCS-12/PFX.ta";
import { pkcs_9_at_userPKCS12 } from "../PKCS-9/pkcs-9-at-userPKCS12.va";

/* START_OF_SYMBOL_DEFINITION userPKCS12 */
/**
 * @summary userPKCS12
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPKCS12 ATTRIBUTE ::= {
 *         WITH SYNTAX PFX
 *         ID pkcs-9-at-userPKCS12
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PFX>}
 * @implements {ATTRIBUTE<PFX>}
 */
export const userPKCS12: ATTRIBUTE<PFX> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PFX,
    },
    encoderFor: {
        "&Type": _encode_PFX,
    },
    "&id": pkcs_9_at_userPKCS12 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userPKCS12 */

/* eslint-enable */
