/*
    BEGIN_MODULE PKIXCMP-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-cmp2000-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/AuthenticationFramework";
import { CertId, _decode_CertId, _encode_CertId } from "./PKIXCRMF-2009";
import * as __utils from "./__utils";

export class OOBCertHash {
    constructor(
        readonly hashAlg: asn1.OPTIONAL<AlgorithmIdentifier>,
        readonly certId: asn1.OPTIONAL<CertId>,
        readonly hashVal: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_OOBCertHash: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hashAlg",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certId",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hashVal",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OOBCertHash: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OOBCertHash: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OOBCertHash: __utils.ASN1Decoder<
    OOBCertHash
> | null = null;
let _cached_encoder_for_OOBCertHash: __utils.ASN1Encoder<
    OOBCertHash
> | null = null;
export function _decode_OOBCertHash(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OOBCertHash) {
        _cached_decoder_for_OOBCertHash = function (
            el: asn1.ASN1Element
        ): OOBCertHash {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashAlg: asn1.OPTIONAL<AlgorithmIdentifier>;
            let certId: asn1.OPTIONAL<CertId>;
            let hashVal!: asn1.BIT_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                hashAlg: (_el: asn1.ASN1Element): void => {
                    hashAlg = __utils._decode_explicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                certId: (_el: asn1.ASN1Element): void => {
                    certId = __utils._decode_explicit<CertId>(
                        () => _decode_CertId
                    )(_el);
                },
                hashVal: (_el: asn1.ASN1Element): void => {
                    hashVal = __utils._decodeBitString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OOBCertHash,
                _extension_additions_list_spec_for_OOBCertHash,
                _root_component_type_list_2_spec_for_OOBCertHash,
                undefined
            );
            return new OOBCertHash /* SEQUENCE_CONSTRUCTOR_CALL */(
                hashAlg,
                certId,
                hashVal
            );
        };
    }
    return _cached_decoder_for_OOBCertHash(el);
}
export function _encode_OOBCertHash(
    value: OOBCertHash,
    elGetter: __utils.ASN1Encoder<OOBCertHash>
) {
    if (!_cached_encoder_for_OOBCertHash) {
        _cached_encoder_for_OOBCertHash = function (
            value: OOBCertHash,
            elGetter: __utils.ASN1Encoder<OOBCertHash>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.hashAlg === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_AlgorithmIdentifier,
                                  __utils.DER
                              )(value.hashAlg, __utils.DER),
                        /* IF_ABSENT  */ value.certId === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_CertId,
                                  __utils.DER
                              )(value.certId, __utils.DER),
                        /* REQUIRED   */ __utils._encodeBitString(
                            value.hashVal,
                            __utils.DER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_OOBCertHash(value, elGetter);
}

/* END_MODULE PKIXCMP-2009 */
