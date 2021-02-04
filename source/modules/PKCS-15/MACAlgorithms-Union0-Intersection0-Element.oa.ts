import type { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { hMAC_SHA1 } from "../CryptographicMessageSyntax/hMAC-SHA1.va";
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";

/**
 * ### ASN.1 Definition
 *
 * ```asn1
 * {NULL IDENTIFIED BY hMAC-SHA1}
 * ```
 */
export const MACAlgorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": hMAC_SHA1,
    "&Type": 0 as never,
};
