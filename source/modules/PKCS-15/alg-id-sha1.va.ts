/* eslint-disable */
import * as asn1 from "asn1-ts";
import { AlgorithmIdentifier } from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import { sha_1 } from "../CryptographicMessageSyntax/sha-1.va";
export { sha_1 } from "../CryptographicMessageSyntax/sha-1.va";

/* START_OF_SYMBOL_DEFINITION alg_id_sha1 */
/**
 * @summary alg_id_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * alg-id-sha1 AlgorithmIdentifier {{DigestAlgorithms}} ::= { algorithm  sha-1, parameters SHA1Parameters : NULL}
 * ```
 *
 * @constant
 */
export const alg_id_sha1: AlgorithmIdentifier = AlgorithmIdentifier._from_object(
    {
        algorithm: sha_1,
        parameters: new asn1.DERElement(
            asn1.ASN1TagClass.universal,
            asn1.ASN1Construction.primitive,
            asn1.ASN1UniversalType.nill,
            null
        ),
    }
);
/* END_OF_SYMBOL_DEFINITION alg_id_sha1 */

/* eslint-enable */
