/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import {
    PKCS15Token,
    _decode_PKCS15Token,
    _encode_PKCS15Token,
} from "../PKCS-15/PKCS15Token.ta";
import { pkcs_9_at_pkcs15Token } from "../PKCS-9/pkcs-9-at-pkcs15Token.va";

/* START_OF_SYMBOL_DEFINITION pKCS15Token */
/**
 * @summary pKCS15Token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pKCS15Token ATTRIBUTE ::= {
 *         WITH SYNTAX PKCS15Token
 *         ID pkcs-9-at-pkcs15Token
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PKCS15Token>}
 * @implements {ATTRIBUTE<PKCS15Token>}
 */
export const pKCS15Token: ATTRIBUTE<PKCS15Token> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PKCS15Token,
    },
    encoderFor: {
        "&Type": _encode_PKCS15Token,
    },
    "&id": pkcs_9_at_pkcs15Token /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pKCS15Token */

/* eslint-enable */
