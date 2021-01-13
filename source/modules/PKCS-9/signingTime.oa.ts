/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { pkcs_9_at_signingTime } from "../PKCS-9/pkcs-9-at-signingTime.va";
import {
    SigningTime,
    _decode_SigningTime,
    _encode_SigningTime,
} from "../PKCS-9/SigningTime.ta";
import { signingTimeMatch } from "../PKCS-9/signingTimeMatch.oa";

/* START_OF_SYMBOL_DEFINITION signingTime */
/**
 * @summary signingTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signingTime ATTRIBUTE ::= {
 *         WITH SYNTAX SigningTime
 *         EQUALITY MATCHING RULE signingTimeMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-signingTime
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SigningTime>}
 * @implements {ATTRIBUTE<SigningTime>}
 */
export const signingTime: ATTRIBUTE<SigningTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SigningTime,
    },
    encoderFor: {
        "&Type": _encode_SigningTime,
    },
    "&equality-match": signingTimeMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_signingTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION signingTime */

/* eslint-enable */
