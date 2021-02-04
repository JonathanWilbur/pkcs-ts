import type { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { id_alg_CMS3DESwrap } from "../CryptographicMessageSyntax/id-alg-CMS3DESwrap.va";
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";

/**
 * ### ASN.1 Definition
 *
 * ```asn1
 * {NULL IDENTIFIED BY id-alg-CMS3DESwrap}
 * ```
 */
export const KeyEncryptionAlgorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_alg_CMS3DESwrap,
    "&Type": 0 as never,
};
