/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { AlgorithmIdentifier } from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import { id_RSASSA_PSS } from "../PKCS-1/id-RSASSA-PSS.va";
import type { RSASSA_AlgorithmIdentifier } from "../PKCS-1/RSASSA-AlgorithmIdentifier.ta";
import { RSASSA_PSS_params, _encode_RSASSA_PSS_params } from "./RSASSA-PSS-params.ta";
import { sha1 } from "./sha1.va";
import { mgf1SHA1 } from "./mgf1SHA1.va";
import { trailerFieldBC } from "./TrailerField.ta";

/* START_OF_SYMBOL_DEFINITION rSASSA_PSS_Default_Identifier */
/**
 * @summary rSASSA_PSS_Default_Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rSASSA-PSS-Default-Identifier    RSASSA-AlgorithmIdentifier ::= {
 *     algorithm   id-RSASSA-PSS,
 *     parameters  RSASSA-PSS-params : {
 *         hashAlgorithm       sha1,
 *         maskGenAlgorithm    mgf1SHA1,
 *         saltLength          20,
 *         trailerField        trailerFieldBC
 *     }
 * }
 * ```
 *
 * @constant
 */
export const rSASSA_PSS_Default_Identifier: RSASSA_AlgorithmIdentifier = AlgorithmIdentifier._from_object(
    {
        algorithm: id_RSASSA_PSS,
        parameters: _encode_RSASSA_PSS_params(new RSASSA_PSS_params(
            sha1,
            mgf1SHA1,
            20,
            trailerFieldBC,
        ), $.DER),
        _unrecognizedExtensionsList: undefined,
    }
);
/* END_OF_SYMBOL_DEFINITION rSASSA_PSS_Default_Identifier */

/* eslint-enable */
