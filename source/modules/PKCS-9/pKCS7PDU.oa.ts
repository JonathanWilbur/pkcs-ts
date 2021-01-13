/* eslint-disable */
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "../CryptographicMessageSyntax/ContentInfo.ta";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { pkcs_9_at_pkcs7PDU } from "../PKCS-9/pkcs-9-at-pkcs7PDU.va";

/* START_OF_SYMBOL_DEFINITION pKCS7PDU */
/**
 * @summary pKCS7PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pKCS7PDU ATTRIBUTE ::= {
 *         WITH SYNTAX ContentInfo
 *         ID pkcs-9-at-pkcs7PDU
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ContentInfo>}
 * @implements {ATTRIBUTE<ContentInfo>}
 */
export const pKCS7PDU: ATTRIBUTE<ContentInfo> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContentInfo,
    },
    encoderFor: {
        "&Type": _encode_ContentInfo,
    },
    "&id": pkcs_9_at_pkcs7PDU /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pKCS7PDU */

/* eslint-enable */
