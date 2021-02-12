/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import { id_mgf1 } from "../PKCS-1/id-mgf1.va";
import { MaskGenAlgorithm } from "../PKCS-1/MaskGenAlgorithm.ta";
import { sha1 } from "../PKCS-1/sha1.va";

/* START_OF_SYMBOL_DEFINITION mgf1SHA1 */
/**
 * @summary mgf1SHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mgf1SHA1    MaskGenAlgorithm ::= {
 *     algorithm   id-mgf1,
 *     parameters  HashAlgorithm : sha1
 * }
 * ```
 *
 * @constant
 */
export const mgf1SHA1: MaskGenAlgorithm = AlgorithmIdentifier._from_object({
    algorithm: id_mgf1,
    parameters: _encode_AlgorithmIdentifier(sha1, $.DER),
    _unrecognizedExtensionsList: undefined,
});
/* END_OF_SYMBOL_DEFINITION mgf1SHA1 */

/* eslint-enable */
