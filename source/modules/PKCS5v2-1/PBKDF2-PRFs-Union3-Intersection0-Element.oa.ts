/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
import { id_hmacWithSHA384 } from "../PKCS5v2-1/id-hmacWithSHA384.va";
export { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
export { id_hmacWithSHA384 } from "../PKCS5v2-1/id-hmacWithSHA384.va";

/* START_OF_SYMBOL_DEFINITION PBKDF2_PRFs_Union3_Intersection0_Element */
/**
 * @summary PBKDF2_PRFs_Union3_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2-PRFs-Union3-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<NULL>}
 * @implements {ALGORITHM_IDENTIFIER<NULL>}
 */
export const PBKDF2_PRFs_Union3_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION PBKDF2_PRFs_Union3_Intersection0_Element */

/* eslint-enable */
