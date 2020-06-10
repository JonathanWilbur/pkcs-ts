/*
    BEGIN_MODULE AlgorithmInformation-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-algorithmInformation-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
export {
    KeyUsage,
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "./PKIX1Implicit-2009";

export type ParamOptions = asn1.ENUMERATED;
export const ParamOptions_required: ParamOptions = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const required: ParamOptions = ParamOptions_required; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ParamOptions_preferredPresent: ParamOptions = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const preferredPresent: ParamOptions = ParamOptions_preferredPresent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ParamOptions_preferredAbsent: ParamOptions = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const preferredAbsent: ParamOptions = ParamOptions_preferredAbsent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ParamOptions_absent: ParamOptions = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const absent: ParamOptions = ParamOptions_absent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ParamOptions_inheritable: ParamOptions = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const inheritable: ParamOptions = ParamOptions_inheritable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ParamOptions_optional: ParamOptions = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const optional: ParamOptions = ParamOptions_optional; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ParamOptions = __utils._decodeEnumerated;
export const _encode_ParamOptions = __utils._encodeEnumerated;

// TODO: ObjectClassAssignment: DIGEST-ALGORITHM

// TODO: ObjectClassAssignment: PUBLIC-KEY

// TODO: ObjectClassAssignment: SMIME-CAPS

// TODO: ObjectClassAssignment: SIGNATURE-ALGORITHM

// TODO: ObjectClassAssignment: KEY-TRANSPORT

// TODO: ObjectClassAssignment: KEY-AGREE

// TODO: ObjectClassAssignment: KEY-WRAP

// TODO: ObjectClassAssignment: KEY-DERIVATION

// TODO: ObjectClassAssignment: MAC-ALGORITHM

// TODO: ObjectClassAssignment: CONTENT-ENCRYPTION

// TODO: ObjectClassAssignment: ALGORITHM

export class AlgorithmIdentifier<ALGORITHM_TYPE> {
    constructor(
        readonly algorithm: asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
        readonly parameters:
            | asn1.ASN1Element
            | /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [];

export const _get_decoder_for_AlgorithmIdentifier = function <ALGORITHM_TYPE>(
    _decode_ALGORITHM_TYPE: __utils.ASN1Decoder<ALGORITHM_TYPE>
) {
    return function (
        el: asn1.ASN1Element
    ): AlgorithmIdentifier<ALGORITHM_TYPE> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let algorithm!: asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
        let parameters: asn1.OPTIONAL<asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>;
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: __utils.DecodingMap = {
            algorithm: (_el: asn1.ASN1Element): void => {
                algorithm = __utils._decodeAny(
                    /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ _el
                );
            },
            parameters: (_el: asn1.ASN1Element): void => {
                parameters = __utils._decodeAny(
                    /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ _el
                );
            },
        };
        /* END_OF_CALLBACKS_MAP */
        __utils._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_AlgorithmIdentifier,
            _extension_additions_list_spec_for_AlgorithmIdentifier,
            _root_component_type_list_2_spec_for_AlgorithmIdentifier,
            undefined
        );
        return new AlgorithmIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
            algorithm,
            parameters
        );
    };
};
export const _get_encoder_for_AlgorithmIdentifier = function <ALGORITHM_TYPE>(
    _encode_ALGORITHM_TYPE: __utils.ASN1Encoder<ALGORITHM_TYPE>
) {
    return function (
        value: AlgorithmIdentifier<ALGORITHM_TYPE>,
        elGetter: __utils.ASN1Encoder<AlgorithmIdentifier<ALGORITHM_TYPE>>
    ): asn1.ASN1Element {
        return __utils._encodeSequence(
            ([] as (asn1.ASN1Element | undefined)[])
                .concat([
                    /* REQUIRED   */ __utils._encodeAny(
                        /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ value.algorithm,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.parameters === undefined
                        ? undefined
                        : __utils._encodeAny(
                              /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ value.parameters,
                              __utils.BER
                          ),
                ])
                .filter(
                    (c: asn1.ASN1Element | undefined): boolean => !!c
                ) as asn1.ASN1Element[],
            __utils.BER
        );
    };
};

export class SMIMECapability {
    constructor(
        readonly capabilityID: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SMIMECapability: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "capabilityID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SMIMECapability: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SMIMECapability: __utils.ComponentSpec[] = [];

export const _decode_SMIMECapability = function (
    el: asn1.ASN1Element
): SMIMECapability {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let capabilityID!: asn1.OBJECT_IDENTIFIER;
    let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        capabilityID: (_el: asn1.ASN1Element): void => {
            capabilityID = __utils._decodeObjectIdentifier(_el);
        },
        parameters: (_el: asn1.ASN1Element): void => {
            parameters = __utils._decodeAny(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SMIMECapability,
        _extension_additions_list_spec_for_SMIMECapability,
        _root_component_type_list_2_spec_for_SMIMECapability,
        undefined
    );
    return new SMIMECapability /* SEQUENCE_CONSTRUCTOR_CALL */(
        capabilityID,
        parameters
    );
};
export const _encode_SMIMECapability = function (
    value: SMIMECapability,
    elGetter: __utils.ASN1Encoder<SMIMECapability>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.capabilityID,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.parameters === undefined
                    ? undefined
                    : __utils._encodeAny(value.parameters, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type SMIMECapabilities = SMIMECapability[]; // SequenceOfType
export const _decode_SMIMECapabilities = __utils._decodeSequenceOf<
    SMIMECapability
>(() => _decode_SMIMECapability);
export const _encode_SMIMECapabilities = __utils._encodeSequenceOf<
    SMIMECapability
>(() => _encode_SMIMECapability, __utils.BER);

/* END_MODULE AlgorithmInformation-2009 */
