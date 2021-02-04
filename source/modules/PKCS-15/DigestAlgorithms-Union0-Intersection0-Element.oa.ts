import type { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { sha_1 } from "../CryptographicMessageSyntax/sha-1.va";
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";

/**
 * ### ASN.1 Definition
 *
 * ```asn1
 * {NULL IDENTIFIED BY sha-1}
 * ```
 */
export const DigestAlgorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha_1,
    "&Type": 0 as never,
};
