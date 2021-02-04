import type { INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { id_alg_CMSRC2wrap } from "../CryptographicMessageSyntax/id-alg-CMSRC2wrap.va";
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";

/**
 * ### ASN.1 Definition
 *
 * ```asn1
 * {INTEGER IDENTIFIED BY id-alg-CMSRC2wrap}
 * ```
 */
export const KeyEncryptionAlgorithms_Union1_Intersection0_Element: ALGORITHM_IDENTIFIER<INTEGER> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&id": id_alg_CMSRC2wrap,
    "&Type": 0 as never,
};
