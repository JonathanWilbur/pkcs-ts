import type { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import type { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
import { id_hmacWithSHA1 } from "../PKCS5v2-1/id-hmacWithSHA1.va";

/**
 * ### ASN.1 Definition
 * ```
 * {NULL IDENTIFIED BY id-hmacWithSHA1}
 * ```
 */
export const ContentEncryptionAlgorithms_Union0_Intersection0_Exclusion: ALGORITHM_IDENTIFIER<NULL> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA1,
    "&Type": 0 as never,
};
