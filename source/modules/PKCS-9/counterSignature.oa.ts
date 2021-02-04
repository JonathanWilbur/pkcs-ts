/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from "../CryptographicMessageSyntax/SignerInfo.ta";
import { pkcs_9_at_counterSignature } from "../PKCS-9/pkcs-9-at-counterSignature.va";

/* START_OF_SYMBOL_DEFINITION counterSignature */
/**
 * @summary counterSignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * counterSignature ATTRIBUTE ::= {
 *         WITH SYNTAX SignerInfo
 *         ID pkcs-9-at-counterSignature
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SignerInfo>}
 * @implements {ATTRIBUTE<SignerInfo>}
 */
export const counterSignature: ATTRIBUTE<SignerInfo> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SignerInfo,
    },
    encoderFor: {
        "&Type": _encode_SignerInfo,
    },
    "&id": pkcs_9_at_counterSignature /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION counterSignature */

/* eslint-enable */
