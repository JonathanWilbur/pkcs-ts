/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { emptyString } from "../PKCS-1/emptyString.va";
import { id_pSpecified } from "../PKCS-1/id-pSpecified.va";
import { PSourceAlgorithm } from "../PKCS-1/PSourceAlgorithm.ta";
import {
    AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION pSpecifiedEmpty */
/**
 * @summary pSpecifiedEmpty
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pSpecifiedEmpty    PSourceAlgorithm ::= {
 *     algorithm   id-pSpecified,
 *     parameters  EncodingParameters : emptyString
 * }
 * ```
 *
 * @constant
 */
export const pSpecifiedEmpty: PSourceAlgorithm = AlgorithmIdentifier._from_object({
    algorithm: id_pSpecified,
    parameters: $._encodeOctetString(emptyString, $.DER),
});
/* END_OF_SYMBOL_DEFINITION pSpecifiedEmpty */

/* eslint-enable */
