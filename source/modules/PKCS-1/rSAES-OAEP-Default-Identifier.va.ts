/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_RSAES_OAEP } from "../PKCS-1/id-RSAES-OAEP.va";
import { RSAES_AlgorithmIdentifier } from "../PKCS-1/RSAES-AlgorithmIdentifier.ta";
import {
    AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    RSAES_OAEP_params,
    _decode_RSAES_OAEP_params,
    _encode_RSAES_OAEP_params,
} from "./RSAES-OAEP-params.ta";
import { sha1 } from "./sha1.va";
import { mgf1SHA1 } from "./mgf1SHA1.va";
import { pSpecifiedEmpty } from "./pSpecifiedEmpty.va";

/* START_OF_SYMBOL_DEFINITION rSAES_OAEP_Default_Identifier */
/**
 * @summary rSAES_OAEP_Default_Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rSAES-OAEP-Default-Identifier    RSAES-AlgorithmIdentifier ::= {
 *     algorithm   id-RSAES-OAEP,
 *     parameters  RSAES-OAEP-params : {
 *         hashAlgorithm       sha1,
 *         maskGenAlgorithm    mgf1SHA1,
 *         pSourceAlgorithm    pSpecifiedEmpty
 *     }
 * }
 * ```
 *
 * @constant
 */
export const rSAES_OAEP_Default_Identifier: RSAES_AlgorithmIdentifier = AlgorithmIdentifier._from_object(
    {
        algorithm: id_RSAES_OAEP,
        parameters: _encode_RSAES_OAEP_params(
            RSAES_OAEP_params._from_object({
                hashAlgorithm: sha1,
                maskGenAlgorithm: mgf1SHA1,
                pSourceAlgorithm: pSpecifiedEmpty,
            }),
            $.DER,
        ),
    }
);
/* END_OF_SYMBOL_DEFINITION rSAES_OAEP_Default_Identifier */

/* eslint-enable */
