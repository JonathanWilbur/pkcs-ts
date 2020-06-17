/*
    BEGIN_MODULE PKCS-3
    OID: undefined
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

export const pkcs_3: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    3,
]);

export const dhKeyAgreement: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    pkcs_3
);

export class DHParameter {
    constructor(
        readonly prime: asn1.INTEGER,
        readonly base: asn1.INTEGER,
        readonly privateValueLength: asn1.OPTIONAL<asn1.INTEGER>
    ) {}
}
export const _root_component_type_list_1_spec_for_DHParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "prime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "base",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privateValueLength",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DHParameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DHParameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DHParameter: __utils.ASN1Decoder<
    DHParameter
> | null = null;
let _cached_encoder_for_DHParameter: __utils.ASN1Encoder<
    DHParameter
> | null = null;
export function _decode_DHParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DHParameter) {
        _cached_decoder_for_DHParameter = function (
            el: asn1.ASN1Element
        ): DHParameter {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let prime!: asn1.INTEGER;
            let base!: asn1.INTEGER;
            let privateValueLength: asn1.OPTIONAL<asn1.INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                prime: (_el: asn1.ASN1Element): void => {
                    prime = __utils._decodeInteger(_el);
                },
                base: (_el: asn1.ASN1Element): void => {
                    base = __utils._decodeInteger(_el);
                },
                privateValueLength: (_el: asn1.ASN1Element): void => {
                    privateValueLength = __utils._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DHParameter,
                _extension_additions_list_spec_for_DHParameter,
                _root_component_type_list_2_spec_for_DHParameter,
                undefined
            );
            return new DHParameter /* SEQUENCE_CONSTRUCTOR_CALL */(
                prime,
                base,
                privateValueLength
            );
        };
    }
    return _cached_decoder_for_DHParameter(el);
}
export function _encode_DHParameter(
    value: DHParameter,
    elGetter: __utils.ASN1Encoder<DHParameter>
) {
    if (!_cached_encoder_for_DHParameter) {
        _cached_encoder_for_DHParameter = function (
            value: DHParameter,
            elGetter: __utils.ASN1Encoder<DHParameter>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.prime,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.base,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.privateValueLength === undefined
                            ? undefined
                            : __utils._encodeInteger(
                                  value.privateValueLength,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_DHParameter(value, elGetter);
}

/* END_MODULE PKCS-3 */
