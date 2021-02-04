/* eslint-disable */
import { AlgorithmIdentifier } from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import { id_RSASSA_PSS } from "../PKCS-1/id-RSASSA-PSS.va";
import type { RSASSA_AlgorithmIdentifier } from "../PKCS-1/RSASSA-AlgorithmIdentifier.ta";

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
        algorithm: id_RSASSA_PSS /* FIXME: COULD_NOT_COMPILE_SEQUENCE_OR_SET_VALUE parameters */,
    }
);
/* END_OF_SYMBOL_DEFINITION rSASSA_PSS_Default_Identifier */

/* eslint-enable */
