/*
    BEGIN_MODULE AuthenticationFramework
    OID: joint-iso-itu-t.ds.module.authenticationFramework.3
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "./CertificateExtensions";
import {
    Attribute,
    AttributeType,
    Name,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_Name,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_Name,
} from "./InformationFramework";
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "./SelectedAttributeTypes";
import { id_at, id_mr } from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    AuthenticationLevel,
    _decode_AuthenticationLevel,
    _encode_AuthenticationLevel,
} from "./BasicAccessControl";
export {
    certificateExactMatch,
    certificateListExactMatch,
    certificatePairExactMatch,
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "./CertificateExtensions";
export {
    ATTRIBUTE,
    Attribute,
    AttributeType,
    MATCHING_RULE,
    Name,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_Name,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_Name,
} from "./InformationFramework";
export {
    octetStringMatch,
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "./SelectedAttributeTypes";
export { ub_user_password } from "./UpperBounds";
export {
    basicAccessControl,
    certificateExtensions,
    id_at,
    id_mr,
    informationFramework,
    selectedAttributeTypes,
    upperBounds,
} from "./UsefulDefinitions";

// TODO: ObjectSetAssignment: SupportedAlgorithms

// TODO: ObjectSetAssignment: ExtensionSet

// TODO: ObjectClassAssignment: EXTENSION

export class AlgorithmIdentifier {
    constructor(
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
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
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [];

export const _decode_AlgorithmIdentifier = function (
    el: asn1.ASN1Element
): AlgorithmIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let algorithm!: asn1.OBJECT_IDENTIFIER;
    let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        algorithm: (_el: asn1.ASN1Element): void => {
            algorithm = __utils._decodeObjectIdentifier(_el);
        },
        parameters: (_el: asn1.ASN1Element): void => {
            parameters = __utils._decodeAny(_el);
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
export const _encode_AlgorithmIdentifier = function (
    value: AlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.algorithm,
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

export type ENCRYPTED_HASH<ToBeSigned> = asn1.BIT_STRING;
export const _get_decoder_for_ENCRYPTED_HASH = function <ToBeSigned>(
    _decode_ToBeSigned: __utils.ASN1Decoder<ToBeSigned>
) {
    return __utils._decodeBitString;
};
export const _get_encoder_for_ENCRYPTED_HASH = function <ToBeSigned>(
    _encode_ToBeSigned: __utils.ASN1Encoder<ToBeSigned>
) {
    return __utils._encodeBitString;
};

export class SIGNATURE<ToBeSigned> {
    constructor(
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly encrypted: ENCRYPTED_HASH<ToBeSigned>
    ) {}
}
export const _root_component_type_list_1_spec_for_SIGNATURE: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithmIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encrypted",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SIGNATURE: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SIGNATURE: __utils.ComponentSpec[] = [];

export const _get_decoder_for_SIGNATURE = function <ToBeSigned>(
    _decode_ToBeSigned: __utils.ASN1Decoder<ToBeSigned>
) {
    return function <ToBeSigned>(el: asn1.ASN1Element): SIGNATURE<ToBeSigned> {
        const sequence: asn1.ASN1Element[] = el.sequence;
        if (sequence.length < 2) {
            throw new asn1.ASN1ConstructionError(
                "SIGNATURE contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        // TODO: Validate tags.
        sequence[0].name = "algorithmIdentifier";
        sequence[1].name = "encrypted";
        let algorithmIdentifier!: AlgorithmIdentifier;
        let encrypted!: ENCRYPTED_HASH<ToBeSigned>;
        algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
        encrypted = _get_decoder_for_ENCRYPTED_HASH<ToBeSigned>(
            _decode_ToBeSigned
        )(sequence[1]);
        // TODO: Validate values.
        return new SIGNATURE<ToBeSigned>(algorithmIdentifier, encrypted);
    };
};
export const _get_encoder_for_SIGNATURE = function <ToBeSigned>(
    _encode_ToBeSigned: __utils.ASN1Encoder<ToBeSigned>
) {
    return function (
        value: SIGNATURE<ToBeSigned>,
        elGetter: __utils.ASN1Encoder<SIGNATURE<ToBeSigned>>
    ): asn1.ASN1Element {
        return __utils._encodeSequence(
            ([] as (asn1.ASN1Element | undefined)[])
                .concat([
                    /* REQUIRED   */ _encode_AlgorithmIdentifier(
                        value.algorithmIdentifier,
                        __utils.BER
                    ),
                    /* REQUIRED   */ _get_encoder_for_ENCRYPTED_HASH<
                        ToBeSigned
                    >(_encode_ToBeSigned)(value.encrypted, __utils.BER),
                ])
                .filter(
                    (c: asn1.ASN1Element | undefined): boolean => !!c
                ) as asn1.ASN1Element[],
            __utils.BER
        );
    };
};

export class SIGNED<ToBeSigned> {
    constructor(
        readonly toBeSigned: ToBeSigned,
        readonly algorithmIdentifier: AlgorithmIdentifier /* REPLICATED_COMPONENT */,
        readonly encrypted: ENCRYPTED_HASH<
            ToBeSigned
        > /* REPLICATED_COMPONENT */
    ) {}
}
export const _root_component_type_list_1_spec_for_SIGNED: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "toBeSigned",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "algorithmIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encrypted",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SIGNED: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SIGNED: __utils.ComponentSpec[] = [];

export const _get_decoder_for_SIGNED = function <ToBeSigned>(
    _decode_ToBeSigned: __utils.ASN1Decoder<ToBeSigned>
) {
    return function (el: asn1.ASN1Element): SIGNED<ToBeSigned> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let toBeSigned!: ToBeSigned;
        let algorithmIdentifier!: AlgorithmIdentifier;
        let encrypted!: ENCRYPTED_HASH<ToBeSigned>;
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: __utils.DecodingMap = {
            toBeSigned: (_el: asn1.ASN1Element): void => {
                toBeSigned = _decode_ToBeSigned(_el);
            },
            algorithmIdentifier: (_el: asn1.ASN1Element): void => {
                algorithmIdentifier = _decode_AlgorithmIdentifier(_el);
            },
            encrypted: (_el: asn1.ASN1Element): void => {
                encrypted = _get_decoder_for_ENCRYPTED_HASH<ToBeSigned>(
                    _decode_ToBeSigned
                )(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        __utils._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_SIGNED,
            _extension_additions_list_spec_for_SIGNED,
            _root_component_type_list_2_spec_for_SIGNED,
            undefined
        );
        return new SIGNED /* SEQUENCE_CONSTRUCTOR_CALL */(
            toBeSigned,
            algorithmIdentifier,
            encrypted
        );
    };
};
export const _get_encoder_for_SIGNED = function <ToBeSigned>(
    _encode_ToBeSigned: __utils.ASN1Encoder<ToBeSigned>
) {
    return function (
        value: SIGNED<ToBeSigned>,
        elGetter: __utils.ASN1Encoder<SIGNED<ToBeSigned>>
    ): asn1.ASN1Element {
        return __utils._encodeSequence(
            ([] as (asn1.ASN1Element | undefined)[])
                .concat([
                    /* REQUIRED   */ _encode_ToBeSigned(
                        value.toBeSigned,
                        __utils.BER
                    ),
                    /* REQUIRED   */ _encode_AlgorithmIdentifier(
                        value.algorithmIdentifier,
                        __utils.BER
                    ),
                    /* REQUIRED   */ _get_encoder_for_ENCRYPTED_HASH<
                        ToBeSigned
                    >(_encode_ToBeSigned)(value.encrypted, __utils.BER),
                ])
                .filter(
                    (c: asn1.ASN1Element | undefined): boolean => !!c
                ) as asn1.ASN1Element[],
            __utils.BER
        );
    };
};

export type Version = asn1.INTEGER;
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
export const v1: Version = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */
export const Version_v2: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
export const v2: Version = Version_v2; /* SHORT_NAMED_INTEGER_VALUE */
export const Version_v3: Version = 2; /* LONG_NAMED_INTEGER_VALUE */
export const v3: Version = Version_v3; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Version = __utils._decodeInteger;
export const _encode_Version = __utils._encodeInteger;

export type CertificateSerialNumber = asn1.INTEGER;
export const _decode_CertificateSerialNumber = __utils._decodeInteger;
export const _encode_CertificateSerialNumber = __utils._encodeInteger;

export type Time =
    | { utcTime: asn1.UTCTime }
    | { generalizedTime: asn1.GeneralizedTime };
export const _decode_Time = __utils._decode_inextensible_choice<Time>({
    "UNIVERSAL 23": ["utcTime", __utils._decodeUTCTime],
    "UNIVERSAL 24": ["generalizedTime", __utils._decodeGeneralizedTime],
});
export const _encode_Time = __utils._encode_choice<Time>(
    {
        utcTime: __utils._encodeUTCTime,
        generalizedTime: __utils._encodeGeneralizedTime,
    },
    __utils.BER
);

export class Validity {
    constructor(readonly notBefore: Time, readonly notAfter: Time) {}
}
export const _root_component_type_list_1_spec_for_Validity: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "notBefore",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notAfter",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Validity: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Validity: __utils.ComponentSpec[] = [];

export const _decode_Validity = function (el: asn1.ASN1Element): Validity {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "Validity contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "notBefore";
    sequence[1].name = "notAfter";
    let notBefore!: Time;
    let notAfter!: Time;
    notBefore = _decode_Time(sequence[0]);
    notAfter = _decode_Time(sequence[1]);
    // TODO: Validate values.
    return new Validity(notBefore, notAfter);
};
export const _encode_Validity = function (
    value: Validity,
    elGetter: __utils.ASN1Encoder<Validity>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Time(value.notBefore, __utils.BER),
                /* REQUIRED   */ _encode_Time(value.notAfter, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class SubjectPublicKeyInfo {
    constructor(
        readonly algorithm: AlgorithmIdentifier,
        readonly subjectPublicKey: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectPublicKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [];

export const _decode_SubjectPublicKeyInfo = function (
    el: asn1.ASN1Element
): SubjectPublicKeyInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "SubjectPublicKeyInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithm";
    sequence[1].name = "subjectPublicKey";
    let algorithm!: AlgorithmIdentifier;
    let subjectPublicKey!: asn1.BIT_STRING;
    algorithm = _decode_AlgorithmIdentifier(sequence[0]);
    subjectPublicKey = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new SubjectPublicKeyInfo(algorithm, subjectPublicKey);
};
export const _encode_SubjectPublicKeyInfo = function (
    value: SubjectPublicKeyInfo,
    elGetter: __utils.ASN1Encoder<SubjectPublicKeyInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_AlgorithmIdentifier(
                    value.algorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeBitString(
                    value.subjectPublicKey,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class Extension {
    constructor(
        readonly extnId: asn1.OBJECT_IDENTIFIER,
        readonly critical: asn1.BOOLEAN | undefined,
        readonly extnValue: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_Extension: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "extnId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "critical",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extnValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Extension: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Extension: __utils.ComponentSpec[] = [];
export const _default_value_for_Extension__critical = false;
export const _decode_Extension = function (el: asn1.ASN1Element): Extension {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let extnId!: asn1.OBJECT_IDENTIFIER;
    let critical: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_Extension__critical;
    let extnValue!: asn1.OCTET_STRING;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        extnId: (_el: asn1.ASN1Element): void => {
            extnId = __utils._decodeObjectIdentifier(_el);
        },
        critical: (_el: asn1.ASN1Element): void => {
            critical = __utils._decodeBoolean(_el);
        },
        extnValue: (_el: asn1.ASN1Element): void => {
            extnValue = __utils._decodeOctetString(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Extension,
        _extension_additions_list_spec_for_Extension,
        _root_component_type_list_2_spec_for_Extension,
        undefined
    );
    return new Extension /* SEQUENCE_CONSTRUCTOR_CALL */(
        extnId,
        critical,
        extnValue
    );
};
export const _encode_Extension = function (
    value: Extension,
    elGetter: __utils.ASN1Encoder<Extension>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.extnId,
                    __utils.BER
                ),
                /* IF_DEFAULT */ value.critical === undefined ||
                __utils.deepEq(
                    value.critical,
                    _default_value_for_Extension__critical
                )
                    ? undefined
                    : __utils._encodeBoolean(value.critical, __utils.BER),
                /* REQUIRED   */ __utils._encodeOctetString(
                    value.extnValue,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type Extensions = Extension[]; // SequenceOfType
export const _decode_Extensions = __utils._decodeSequenceOf<Extension>(
    () => _decode_Extension
);
export const _encode_Extensions = __utils._encodeSequenceOf<Extension>(
    () => _encode_Extension,
    __utils.BER
);

export type Certificate = SIGNED<{
    version: Version;
    serialNumber: asn1.OPTIONAL<CertificateSerialNumber>;
    signature: asn1.OPTIONAL<AlgorithmIdentifier>;
    issuer: asn1.OPTIONAL<Name>;
    validity: asn1.OPTIONAL<Validity>;
    subject: asn1.OPTIONAL<Name>;
    subjectPublicKeyInfo: asn1.OPTIONAL<SubjectPublicKeyInfo>;
    issuerUniqueIdentifier: UniqueIdentifier;
    subjectUniqueIdentifier: UniqueIdentifier;
    extensions: Extensions;
}>; // DefinedType
export const _decode_Certificate = _get_decoder_for_SIGNED<{
    version: Version;
    serialNumber: asn1.OPTIONAL<CertificateSerialNumber>;
    signature: asn1.OPTIONAL<AlgorithmIdentifier>;
    issuer: asn1.OPTIONAL<Name>;
    validity: asn1.OPTIONAL<Validity>;
    subject: asn1.OPTIONAL<Name>;
    subjectPublicKeyInfo: asn1.OPTIONAL<SubjectPublicKeyInfo>;
    issuerUniqueIdentifier: UniqueIdentifier;
    subjectUniqueIdentifier: UniqueIdentifier;
    extensions: Extensions;
}>(function (el: asn1.ASN1Element): SIGNED {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version> = _default_value_for_SIGNED__version;
    let serialNumber!: CertificateSerialNumber;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let validity!: Validity;
    let subject!: Name;
    let subjectPublicKeyInfo!: SubjectPublicKeyInfo;
    let issuerUniqueIdentifier: asn1.OPTIONAL<UniqueIdentifier>;
    let subjectUniqueIdentifier: asn1.OPTIONAL<UniqueIdentifier>;
    let extensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = __utils._decode_explicit<Version>(() => _decode_Version)(
                _el
            );
        },
        serialNumber: (_el: asn1.ASN1Element): void => {
            serialNumber = _decode_CertificateSerialNumber(_el);
        },
        signature: (_el: asn1.ASN1Element): void => {
            signature = _decode_AlgorithmIdentifier(_el);
        },
        issuer: (_el: asn1.ASN1Element): void => {
            issuer = _decode_Name(_el);
        },
        validity: (_el: asn1.ASN1Element): void => {
            validity = _decode_Validity(_el);
        },
        subject: (_el: asn1.ASN1Element): void => {
            subject = _decode_Name(_el);
        },
        subjectPublicKeyInfo: (_el: asn1.ASN1Element): void => {
            subjectPublicKeyInfo = _decode_SubjectPublicKeyInfo(_el);
        },
        issuerUniqueIdentifier: (_el: asn1.ASN1Element): void => {
            issuerUniqueIdentifier = __utils._decode_explicit<UniqueIdentifier>(
                () => _decode_UniqueIdentifier
            )(_el);
        },
        subjectUniqueIdentifier: (_el: asn1.ASN1Element): void => {
            subjectUniqueIdentifier = __utils._decode_explicit<
                UniqueIdentifier
            >(() => _decode_UniqueIdentifier)(_el);
        },
        extensions: (_el: asn1.ASN1Element): void => {
            extensions = __utils._decode_explicit<Extensions>(
                () => _decode_Extensions
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        undefined
    );
    return new SIGNED /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        serialNumber,
        signature,
        issuer,
        validity,
        subject,
        subjectPublicKeyInfo,
        issuerUniqueIdentifier,
        subjectUniqueIdentifier,
        extensions
    );
});
export const _encode_Certificate = _get_encoder_for_SIGNED<{
    version: Version;
    serialNumber: asn1.OPTIONAL<CertificateSerialNumber>;
    signature: asn1.OPTIONAL<AlgorithmIdentifier>;
    issuer: asn1.OPTIONAL<Name>;
    validity: asn1.OPTIONAL<Validity>;
    subject: asn1.OPTIONAL<Name>;
    subjectPublicKeyInfo: asn1.OPTIONAL<SubjectPublicKeyInfo>;
    issuerUniqueIdentifier: UniqueIdentifier;
    subjectUniqueIdentifier: UniqueIdentifier;
    extensions: Extensions;
}>(function (
    value: SIGNED,
    elGetter: __utils.ASN1Encoder<SIGNED>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_DEFAULT */ value.version === undefined ||
                __utils.deepEq(
                    value.version,
                    _default_value_for_SIGNED__version
                )
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_Version,
                          __utils.BER
                      )(value.version, __utils.BER),
                /* REQUIRED   */ _encode_CertificateSerialNumber(
                    value.serialNumber,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_AlgorithmIdentifier(
                    value.signature,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_Name(value.issuer, __utils.BER),
                /* REQUIRED   */ _encode_Validity(value.validity, __utils.BER),
                /* REQUIRED   */ _encode_Name(value.subject, __utils.BER),
                /* REQUIRED   */ _encode_SubjectPublicKeyInfo(
                    value.subjectPublicKeyInfo,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.issuerUniqueIdentifier === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_UniqueIdentifier,
                          __utils.BER
                      )(value.issuerUniqueIdentifier, __utils.BER),
                /* IF_ABSENT  */ value.subjectUniqueIdentifier === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          2,
                          () => _encode_UniqueIdentifier,
                          __utils.BER
                      )(value.subjectUniqueIdentifier, __utils.BER),
                /* IF_ABSENT  */ value.extensions === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          3,
                          () => _encode_Extensions,
                          __utils.BER
                      )(value.extensions, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
});

export type CrossCertificates = Certificate[]; // SetOfType
export const _decode_CrossCertificates = __utils._decodeSetOf<Certificate>(
    () => _decode_Certificate
);
export const _encode_CrossCertificates = __utils._encodeSetOf<Certificate>(
    () => _encode_Certificate,
    __utils.BER
);

export type ForwardCertificationPath = CrossCertificates[]; // SequenceOfType
export const _decode_ForwardCertificationPath = __utils._decodeSequenceOf<
    CrossCertificates
>(() => _decode_CrossCertificates);
export const _encode_ForwardCertificationPath = __utils._encodeSequenceOf<
    CrossCertificates
>(() => _encode_CrossCertificates, __utils.BER);

export class Certificates {
    constructor(
        readonly userCertificate: Certificate,
        readonly certificationPath: ForwardCertificationPath | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_Certificates: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "userCertificate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificationPath",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Certificates: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Certificates: __utils.ComponentSpec[] = [];

export const _decode_Certificates = function (
    el: asn1.ASN1Element
): Certificates {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let userCertificate!: Certificate;
    let certificationPath: asn1.OPTIONAL<ForwardCertificationPath>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        userCertificate: (_el: asn1.ASN1Element): void => {
            userCertificate = _decode_Certificate(_el);
        },
        certificationPath: (_el: asn1.ASN1Element): void => {
            certificationPath = _decode_ForwardCertificationPath(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Certificates,
        _extension_additions_list_spec_for_Certificates,
        _root_component_type_list_2_spec_for_Certificates,
        undefined
    );
    return new Certificates /* SEQUENCE_CONSTRUCTOR_CALL */(
        userCertificate,
        certificationPath
    );
};
export const _encode_Certificates = function (
    value: Certificates,
    elGetter: __utils.ASN1Encoder<Certificates>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Certificate(
                    value.userCertificate,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.certificationPath === undefined
                    ? undefined
                    : _encode_ForwardCertificationPath(
                          value.certificationPath,
                          __utils.BER
                      ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class CertificatePair {
    constructor(
        readonly issuedByThisCA: Certificate | undefined,
        readonly issuedToThisCA: Certificate | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificatePair: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuedByThisCA",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuedToThisCA",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificatePair: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificatePair: __utils.ComponentSpec[] = [];

export const _decode_CertificatePair = function (
    el: asn1.ASN1Element
): CertificatePair {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let issuedByThisCA: asn1.OPTIONAL<Certificate>;
    let issuedToThisCA: asn1.OPTIONAL<Certificate>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        issuedByThisCA: (_el: asn1.ASN1Element): void => {
            issuedByThisCA = __utils._decode_explicit<Certificate>(
                () => _decode_Certificate
            )(_el);
        },
        issuedToThisCA: (_el: asn1.ASN1Element): void => {
            issuedToThisCA = __utils._decode_explicit<Certificate>(
                () => _decode_Certificate
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertificatePair,
        _extension_additions_list_spec_for_CertificatePair,
        _root_component_type_list_2_spec_for_CertificatePair,
        undefined
    );
    return new CertificatePair /* SEQUENCE_CONSTRUCTOR_CALL */(
        issuedByThisCA,
        issuedToThisCA
    );
};
export const _encode_CertificatePair = function (
    value: CertificatePair,
    elGetter: __utils.ASN1Encoder<CertificatePair>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_ABSENT  */ value.issuedByThisCA === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_Certificate,
                          __utils.BER
                      )(value.issuedByThisCA, __utils.BER),
                /* IF_ABSENT  */ value.issuedToThisCA === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_Certificate,
                          __utils.BER
                      )(value.issuedToThisCA, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class CertificationPath {
    constructor(
        readonly userCertificate: Certificate,
        readonly theCACertificates: CertificatePair[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificationPath: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "userCertificate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "theCACertificates",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificationPath: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificationPath: __utils.ComponentSpec[] = [];

export const _decode_CertificationPath = function (
    el: asn1.ASN1Element
): CertificationPath {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let userCertificate!: Certificate;
    let theCACertificates: asn1.OPTIONAL<CertificatePair[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        userCertificate: (_el: asn1.ASN1Element): void => {
            userCertificate = _decode_Certificate(_el);
        },
        theCACertificates: (_el: asn1.ASN1Element): void => {
            theCACertificates = __utils._decodeSequenceOf<CertificatePair>(
                () => _decode_CertificatePair
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertificationPath,
        _extension_additions_list_spec_for_CertificationPath,
        _root_component_type_list_2_spec_for_CertificationPath,
        undefined
    );
    return new CertificationPath /* SEQUENCE_CONSTRUCTOR_CALL */(
        userCertificate,
        theCACertificates
    );
};
export const _encode_CertificationPath = function (
    value: CertificationPath,
    elGetter: __utils.ASN1Encoder<CertificationPath>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Certificate(
                    value.userCertificate,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.theCACertificates === undefined
                    ? undefined
                    : __utils._encodeSequenceOf<CertificatePair>(
                          () => _encode_CertificatePair,
                          __utils.BER
                      )(value.theCACertificates, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type CertificateList = SIGNED<{
    version: Version;
    signature: asn1.OPTIONAL<AlgorithmIdentifier>;
    issuer: asn1.OPTIONAL<Name>;
    thisUpdate: asn1.OPTIONAL<Time>;
    nextUpdate: Time;
    revokedCertificates: {
        userCertificate: asn1.OPTIONAL<CertificateSerialNumber>;
        revocationDate: asn1.OPTIONAL<Time>;
        crlEntryExtensions: Extensions;
    }[];
    crlExtensions: Extensions;
}>; // DefinedType
export const _decode_CertificateList = _get_decoder_for_SIGNED<{
    version: Version;
    signature: asn1.OPTIONAL<AlgorithmIdentifier>;
    issuer: asn1.OPTIONAL<Name>;
    thisUpdate: asn1.OPTIONAL<Time>;
    nextUpdate: Time;
    revokedCertificates: {
        userCertificate: asn1.OPTIONAL<CertificateSerialNumber>;
        revocationDate: asn1.OPTIONAL<Time>;
        crlEntryExtensions: Extensions;
    }[];
    crlExtensions: Extensions;
}>(function (el: asn1.ASN1Element): SIGNED {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version>;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let thisUpdate!: Time;
    let nextUpdate: asn1.OPTIONAL<Time>;
    let revokedCertificates: asn1.OPTIONAL<
        {
            userCertificate: asn1.OPTIONAL<CertificateSerialNumber>;
            revocationDate: asn1.OPTIONAL<Time>;
            crlEntryExtensions: Extensions;
        }[]
    >;
    let crlExtensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_Version(_el);
        },
        signature: (_el: asn1.ASN1Element): void => {
            signature = _decode_AlgorithmIdentifier(_el);
        },
        issuer: (_el: asn1.ASN1Element): void => {
            issuer = _decode_Name(_el);
        },
        thisUpdate: (_el: asn1.ASN1Element): void => {
            thisUpdate = _decode_Time(_el);
        },
        nextUpdate: (_el: asn1.ASN1Element): void => {
            nextUpdate = _decode_Time(_el);
        },
        revokedCertificates: (_el: asn1.ASN1Element): void => {
            revokedCertificates = __utils._decodeSequenceOf<{
                userCertificate: asn1.OPTIONAL<CertificateSerialNumber>;
                revocationDate: asn1.OPTIONAL<Time>;
                crlEntryExtensions: Extensions;
            }>(
                () =>
                    function (el: asn1.ASN1Element): revokedCertificates {
                        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                        let userCertificate!: CertificateSerialNumber;
                        let revocationDate!: Time;
                        let crlEntryExtensions: asn1.OPTIONAL<Extensions>;
                        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                        /* START_OF_CALLBACKS_MAP */
                        const callbacks: __utils.DecodingMap = {
                            userCertificate: (_el: asn1.ASN1Element): void => {
                                userCertificate = _decode_CertificateSerialNumber(
                                    _el
                                );
                            },
                            revocationDate: (_el: asn1.ASN1Element): void => {
                                revocationDate = _decode_Time(_el);
                            },
                            crlEntryExtensions: (
                                _el: asn1.ASN1Element
                            ): void => {
                                crlEntryExtensions = _decode_Extensions(_el);
                            },
                        };
                        /* END_OF_CALLBACKS_MAP */
                        __utils._parse_sequence(
                            el,
                            callbacks,
                            _root_component_type_list_1_spec_for_revokedCertificates,
                            _extension_additions_list_spec_for_revokedCertificates,
                            _root_component_type_list_2_spec_for_revokedCertificates,
                            undefined
                        );
                        return new revokedCertificates /* SEQUENCE_CONSTRUCTOR_CALL */(
                            userCertificate,
                            revocationDate,
                            crlEntryExtensions
                        );
                    }
            )(_el);
        },
        crlExtensions: (_el: asn1.ASN1Element): void => {
            crlExtensions = __utils._decode_explicit<Extensions>(
                () => _decode_Extensions
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        undefined
    );
    return new SIGNED /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        signature,
        issuer,
        thisUpdate,
        nextUpdate,
        revokedCertificates,
        crlExtensions
    );
});
export const _encode_CertificateList = _get_encoder_for_SIGNED<{
    version: Version;
    signature: asn1.OPTIONAL<AlgorithmIdentifier>;
    issuer: asn1.OPTIONAL<Name>;
    thisUpdate: asn1.OPTIONAL<Time>;
    nextUpdate: Time;
    revokedCertificates: {
        userCertificate: asn1.OPTIONAL<CertificateSerialNumber>;
        revocationDate: asn1.OPTIONAL<Time>;
        crlEntryExtensions: Extensions;
    }[];
    crlExtensions: Extensions;
}>(function (
    value: SIGNED,
    elGetter: __utils.ASN1Encoder<SIGNED>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_ABSENT  */ value.version === undefined
                    ? undefined
                    : _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ _encode_AlgorithmIdentifier(
                    value.signature,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_Name(value.issuer, __utils.BER),
                /* REQUIRED   */ _encode_Time(value.thisUpdate, __utils.BER),
                /* IF_ABSENT  */ value.nextUpdate === undefined
                    ? undefined
                    : _encode_Time(value.nextUpdate, __utils.BER),
                ,
                /* FIXME: revokedCertificates COULD_NOT_COMPILE_TYPE_ENCODER */ /* IF_ABSENT  */ value.crlExtensions ===
                undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_Extensions,
                          __utils.BER
                      )(value.crlExtensions, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
});

export class IssuerSerial {
    constructor(
        readonly issuer: GeneralNames,
        readonly serial: CertificateSerialNumber,
        readonly issuerUID: UniqueIdentifier | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_IssuerSerial: __utils.ComponentSpec[] = [
    ,
    /* FIXME: issuer COULD_NOT_RESOLVE_TYPE_DEF */ new __utils.ComponentSpec(
        "serial",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuerUID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IssuerSerial: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IssuerSerial: __utils.ComponentSpec[] = [];

export const _decode_IssuerSerial = function (
    el: asn1.ASN1Element
): IssuerSerial {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let issuer!: GeneralNames;
    let serial!: CertificateSerialNumber;
    let issuerUID: asn1.OPTIONAL<UniqueIdentifier>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        issuer: (_el: asn1.ASN1Element): void => {
            issuer = _decode_GeneralNames(_el);
        },
        serial: (_el: asn1.ASN1Element): void => {
            serial = _decode_CertificateSerialNumber(_el);
        },
        issuerUID: (_el: asn1.ASN1Element): void => {
            issuerUID = _decode_UniqueIdentifier(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_IssuerSerial,
        _extension_additions_list_spec_for_IssuerSerial,
        _root_component_type_list_2_spec_for_IssuerSerial,
        undefined
    );
    return new IssuerSerial /* SEQUENCE_CONSTRUCTOR_CALL */(
        issuer,
        serial,
        issuerUID
    );
};
export const _encode_IssuerSerial = function (
    value: IssuerSerial,
    elGetter: __utils.ASN1Encoder<IssuerSerial>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_GeneralNames(
                    value.issuer,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_CertificateSerialNumber(
                    value.serial,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.issuerUID === undefined
                    ? undefined
                    : _encode_UniqueIdentifier(value.issuerUID, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type AttributeCertificateInfo_subject =
    | { baseCertificateID: IssuerSerial }
    | { subjectName: GeneralNames };
export const _decode_AttributeCertificateInfo_subject = __utils._decode_inextensible_choice<
    AttributeCertificateInfo_subject
>({
    "CONTEXT 0": [
        "baseCertificateID",
        __utils._decode_explicit<IssuerSerial>(() => _decode_IssuerSerial),
    ],
    "CONTEXT 1": [
        "subjectName",
        __utils._decode_explicit<GeneralNames>(() => _decode_GeneralNames),
    ],
});
export const _encode_AttributeCertificateInfo_subject = __utils._encode_choice<
    AttributeCertificateInfo_subject
>(
    {
        baseCertificateID: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            0,
            () => _encode_IssuerSerial,
            __utils.BER
        ),
        subjectName: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () => _encode_GeneralNames,
            __utils.BER
        ),
    },
    __utils.BER
);

export class AttCertValidityPeriod {
    constructor(
        readonly notBeforeTime: asn1.GeneralizedTime,
        readonly notAfterTime: asn1.GeneralizedTime
    ) {}
}
export const _root_component_type_list_1_spec_for_AttCertValidityPeriod: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "notBeforeTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notAfterTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttCertValidityPeriod: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttCertValidityPeriod: __utils.ComponentSpec[] = [];

export const _decode_AttCertValidityPeriod = function (
    el: asn1.ASN1Element
): AttCertValidityPeriod {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "AttCertValidityPeriod contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "notBeforeTime";
    sequence[1].name = "notAfterTime";
    let notBeforeTime!: asn1.GeneralizedTime;
    let notAfterTime!: asn1.GeneralizedTime;
    notBeforeTime = __utils._decodeGeneralizedTime(sequence[0]);
    notAfterTime = __utils._decodeGeneralizedTime(sequence[1]);
    // TODO: Validate values.
    return new AttCertValidityPeriod(notBeforeTime, notAfterTime);
};
export const _encode_AttCertValidityPeriod = function (
    value: AttCertValidityPeriod,
    elGetter: __utils.ASN1Encoder<AttCertValidityPeriod>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeGeneralizedTime(
                    value.notBeforeTime,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeGeneralizedTime(
                    value.notAfterTime,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class AttributeCertificateInfo {
    constructor(
        readonly version: Version | undefined,
        readonly subject: AttributeCertificateInfo_subject,
        readonly issuer: GeneralNames,
        readonly signature: AlgorithmIdentifier,
        readonly serialNumber: CertificateSerialNumber,
        readonly attCertValidityPeriod: AttCertValidityPeriod,
        readonly attributes: Attribute[],
        readonly issuerUniqueID: UniqueIdentifier | undefined,
        readonly extensions: Extensions | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeCertificateInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subject",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    ,
    /* FIXME: issuer COULD_NOT_RESOLVE_TYPE_DEF */ new __utils.ComponentSpec(
        "signature",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attCertValidityPeriod",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuerUniqueID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeCertificateInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeCertificateInfo: __utils.ComponentSpec[] = [];
export const _default_value_for_AttributeCertificateInfo__version = v1;
export const _decode_AttributeCertificateInfo = function (
    el: asn1.ASN1Element
): AttributeCertificateInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version> = _default_value_for_AttributeCertificateInfo__version;
    let subject!: AttributeCertificateInfo_subject;
    let issuer!: GeneralNames;
    let signature!: AlgorithmIdentifier;
    let serialNumber!: CertificateSerialNumber;
    let attCertValidityPeriod!: AttCertValidityPeriod;
    let attributes!: Attribute[];
    let issuerUniqueID: asn1.OPTIONAL<UniqueIdentifier>;
    let extensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_Version(_el);
        },
        subject: (_el: asn1.ASN1Element): void => {
            subject = _decode_AttributeCertificateInfo_subject(_el);
        },
        issuer: (_el: asn1.ASN1Element): void => {
            issuer = _decode_GeneralNames(_el);
        },
        signature: (_el: asn1.ASN1Element): void => {
            signature = _decode_AlgorithmIdentifier(_el);
        },
        serialNumber: (_el: asn1.ASN1Element): void => {
            serialNumber = _decode_CertificateSerialNumber(_el);
        },
        attCertValidityPeriod: (_el: asn1.ASN1Element): void => {
            attCertValidityPeriod = _decode_AttCertValidityPeriod(_el);
        },
        attributes: (_el: asn1.ASN1Element): void => {
            attributes = __utils._decodeSequenceOf<Attribute>(
                () => _decode_Attribute
            )(_el);
        },
        issuerUniqueID: (_el: asn1.ASN1Element): void => {
            issuerUniqueID = _decode_UniqueIdentifier(_el);
        },
        extensions: (_el: asn1.ASN1Element): void => {
            extensions = _decode_Extensions(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AttributeCertificateInfo,
        _extension_additions_list_spec_for_AttributeCertificateInfo,
        _root_component_type_list_2_spec_for_AttributeCertificateInfo,
        undefined
    );
    return new AttributeCertificateInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        subject,
        issuer,
        signature,
        serialNumber,
        attCertValidityPeriod,
        attributes,
        issuerUniqueID,
        extensions
    );
};
export const _encode_AttributeCertificateInfo = function (
    value: AttributeCertificateInfo,
    elGetter: __utils.ASN1Encoder<AttributeCertificateInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_DEFAULT */ value.version === undefined ||
                __utils.deepEq(
                    value.version,
                    _default_value_for_AttributeCertificateInfo__version
                )
                    ? undefined
                    : _encode_Version(value.version, __utils.BER),
                /* REQUIRED   */ _encode_AttributeCertificateInfo_subject(
                    value.subject,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_GeneralNames(
                    value.issuer,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_AlgorithmIdentifier(
                    value.signature,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_CertificateSerialNumber(
                    value.serialNumber,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_AttCertValidityPeriod(
                    value.attCertValidityPeriod,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeSequenceOf<Attribute>(
                    () => _encode_Attribute,
                    __utils.BER
                )(value.attributes, __utils.BER),
                /* IF_ABSENT  */ value.issuerUniqueID === undefined
                    ? undefined
                    : _encode_UniqueIdentifier(
                          value.issuerUniqueID,
                          __utils.BER
                      ),
                /* IF_ABSENT  */ value.extensions === undefined
                    ? undefined
                    : _encode_Extensions(value.extensions, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type AttributeCertificate = SIGNED<AttributeCertificateInfo>; // DefinedType
export const _decode_AttributeCertificate = _get_decoder_for_SIGNED<
    AttributeCertificateInfo
>(_decode_AttributeCertificateInfo);
export const _encode_AttributeCertificate = _get_encoder_for_SIGNED<
    AttributeCertificateInfo
>(_encode_AttributeCertificateInfo);

export class ACPathData {
    constructor(
        readonly certificate: Certificate | undefined,
        readonly attributeCertificate: AttributeCertificate | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_ACPathData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certificate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributeCertificate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ACPathData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ACPathData: __utils.ComponentSpec[] = [];

export const _decode_ACPathData = function (el: asn1.ASN1Element): ACPathData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let certificate: asn1.OPTIONAL<Certificate>;
    let attributeCertificate: asn1.OPTIONAL<AttributeCertificate>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        certificate: (_el: asn1.ASN1Element): void => {
            certificate = __utils._decode_explicit<Certificate>(
                () => _decode_Certificate
            )(_el);
        },
        attributeCertificate: (_el: asn1.ASN1Element): void => {
            attributeCertificate = __utils._decode_explicit<
                AttributeCertificate
            >(() => _decode_AttributeCertificate)(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ACPathData,
        _extension_additions_list_spec_for_ACPathData,
        _root_component_type_list_2_spec_for_ACPathData,
        undefined
    );
    return new ACPathData /* SEQUENCE_CONSTRUCTOR_CALL */(
        certificate,
        attributeCertificate
    );
};
export const _encode_ACPathData = function (
    value: ACPathData,
    elGetter: __utils.ASN1Encoder<ACPathData>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_ABSENT  */ value.certificate === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_Certificate,
                          __utils.BER
                      )(value.certificate, __utils.BER),
                /* IF_ABSENT  */ value.attributeCertificate === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_AttributeCertificate,
                          __utils.BER
                      )(value.attributeCertificate, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class AttributeCertificationPath {
    constructor(
        readonly attributeCertificate: AttributeCertificate,
        readonly acPath: ACPathData[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeCertificationPath: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "attributeCertificate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "acPath",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeCertificationPath: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeCertificationPath: __utils.ComponentSpec[] = [];

export const _decode_AttributeCertificationPath = function (
    el: asn1.ASN1Element
): AttributeCertificationPath {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let attributeCertificate!: AttributeCertificate;
    let acPath: asn1.OPTIONAL<ACPathData[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        attributeCertificate: (_el: asn1.ASN1Element): void => {
            attributeCertificate = _decode_AttributeCertificate(_el);
        },
        acPath: (_el: asn1.ASN1Element): void => {
            acPath = __utils._decodeSequenceOf<ACPathData>(
                () => _decode_ACPathData
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AttributeCertificationPath,
        _extension_additions_list_spec_for_AttributeCertificationPath,
        _root_component_type_list_2_spec_for_AttributeCertificationPath,
        undefined
    );
    return new AttributeCertificationPath /* SEQUENCE_CONSTRUCTOR_CALL */(
        attributeCertificate,
        acPath
    );
};
export const _encode_AttributeCertificationPath = function (
    value: AttributeCertificationPath,
    elGetter: __utils.ASN1Encoder<AttributeCertificationPath>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_AttributeCertificate(
                    value.attributeCertificate,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.acPath === undefined
                    ? undefined
                    : __utils._encodeSequenceOf<ACPathData>(
                          () => _encode_ACPathData,
                          __utils.BER
                      )(value.acPath, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: attributeCertificate

// TODO: ObjectAssignment: attributeCertificateMatch

export type AttributeCertificateAssertion_subject =
    | { baseCertificateID: IssuerSerial }
    | { subjectName: Name };
export const _decode_AttributeCertificateAssertion_subject = __utils._decode_inextensible_choice<
    AttributeCertificateAssertion_subject
>({
    "CONTEXT 0": [
        "baseCertificateID",
        __utils._decode_explicit<IssuerSerial>(() => _decode_IssuerSerial),
    ],
    "CONTEXT 1": [
        "subjectName",
        __utils._decode_explicit<Name>(() => _decode_Name),
    ],
});
export const _encode_AttributeCertificateAssertion_subject = __utils._encode_choice<
    AttributeCertificateAssertion_subject
>(
    {
        baseCertificateID: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            0,
            () => _encode_IssuerSerial,
            __utils.BER
        ),
        subjectName: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () => _encode_Name,
            __utils.BER
        ),
    },
    __utils.BER
);

export class AttributeCertificateAssertion {
    constructor(
        readonly subject: AttributeCertificateAssertion_subject | undefined,
        readonly issuer: Name | undefined,
        readonly attCertValidity: asn1.GeneralizedTime | undefined,
        readonly attType: AttributeType[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeCertificateAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subject",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attCertValidity",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeCertificateAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeCertificateAssertion: __utils.ComponentSpec[] = [];

export const _decode_AttributeCertificateAssertion = function (
    el: asn1.ASN1Element
): AttributeCertificateAssertion {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let subject: asn1.OPTIONAL<AttributeCertificateAssertion_subject>;
    let issuer: asn1.OPTIONAL<Name>;
    let attCertValidity: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let attType: asn1.OPTIONAL<AttributeType[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        subject: (_el: asn1.ASN1Element): void => {
            subject = __utils._decode_explicit<
                AttributeCertificateAssertion_subject
            >(() => _decode_AttributeCertificateAssertion_subject)(_el);
        },
        issuer: (_el: asn1.ASN1Element): void => {
            issuer = __utils._decode_explicit<Name>(() => _decode_Name)(_el);
        },
        attCertValidity: (_el: asn1.ASN1Element): void => {
            attCertValidity = __utils._decode_explicit<asn1.GeneralizedTime>(
                () => __utils._decodeGeneralizedTime
            )(_el);
        },
        attType: (_el: asn1.ASN1Element): void => {
            attType = __utils._decode_explicit<AttributeType[]>(() =>
                __utils._decodeSetOf<AttributeType>(() => _decode_AttributeType)
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AttributeCertificateAssertion,
        _extension_additions_list_spec_for_AttributeCertificateAssertion,
        _root_component_type_list_2_spec_for_AttributeCertificateAssertion,
        undefined
    );
    return new AttributeCertificateAssertion /* SEQUENCE_CONSTRUCTOR_CALL */(
        subject,
        issuer,
        attCertValidity,
        attType
    );
};
export const _encode_AttributeCertificateAssertion = function (
    value: AttributeCertificateAssertion,
    elGetter: __utils.ASN1Encoder<AttributeCertificateAssertion>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_ABSENT  */ value.subject === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_AttributeCertificateAssertion_subject,
                          __utils.BER
                      )(value.subject, __utils.BER),
                /* IF_ABSENT  */ value.issuer === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_Name,
                          __utils.BER
                      )(value.issuer, __utils.BER),
                /* IF_ABSENT  */ value.attCertValidity === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          2,
                          () => __utils._encodeGeneralizedTime,
                          __utils.BER
                      )(value.attCertValidity, __utils.BER),
                /* IF_ABSENT  */ value.attType === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          3,
                          () =>
                              __utils._encodeSetOf<AttributeType>(
                                  () => _encode_AttributeType,
                                  __utils.BER
                              ),
                          __utils.BER
                      )(value.attType, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: userPassword

// TODO: ObjectAssignment: userCertificate

// TODO: ObjectAssignment: cACertificate

// TODO: ObjectAssignment: crossCertificatePair

// TODO: ObjectAssignment: authorityRevocationList

// TODO: ObjectAssignment: certificateRevocationList

// TODO: ObjectAssignment: attributeCertificateRevocationList

// TODO: ObjectClassAssignment: ALGORITHM

export class HASH<ToBeHashed> {
    constructor(
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly hashValue: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_HASH: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithmIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hashValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_HASH: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_HASH: __utils.ComponentSpec[] = [];

export const _get_decoder_for_HASH = function <ToBeHashed>(
    _decode_ToBeHashed: __utils.ASN1Decoder<ToBeHashed>
) {
    return function <ToBeHashed>(el: asn1.ASN1Element): HASH<ToBeHashed> {
        const sequence: asn1.ASN1Element[] = el.sequence;
        if (sequence.length < 2) {
            throw new asn1.ASN1ConstructionError(
                "HASH contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        // TODO: Validate tags.
        sequence[0].name = "algorithmIdentifier";
        sequence[1].name = "hashValue";
        let algorithmIdentifier!: AlgorithmIdentifier;
        let hashValue!: asn1.BIT_STRING;
        algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
        hashValue = __utils._decodeBitString(sequence[1]);
        // TODO: Validate values.
        return new HASH<ToBeHashed>(algorithmIdentifier, hashValue);
    };
};
export const _get_encoder_for_HASH = function <ToBeHashed>(
    _encode_ToBeHashed: __utils.ASN1Encoder<ToBeHashed>
) {
    return function (
        value: HASH<ToBeHashed>,
        elGetter: __utils.ASN1Encoder<HASH<ToBeHashed>>
    ): asn1.ASN1Element {
        return __utils._encodeSequence(
            ([] as (asn1.ASN1Element | undefined)[])
                .concat([
                    /* REQUIRED   */ _encode_AlgorithmIdentifier(
                        value.algorithmIdentifier,
                        __utils.BER
                    ),
                    /* REQUIRED   */ __utils._encodeBitString(
                        value.hashValue,
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

export type ENCRYPTED<ToBeEnciphered> = asn1.BIT_STRING;
export const _get_decoder_for_ENCRYPTED = function <ToBeEnciphered>(
    _decode_ToBeEnciphered: __utils.ASN1Decoder<ToBeEnciphered>
) {
    return __utils._decodeBitString;
};
export const _get_encoder_for_ENCRYPTED = function <ToBeEnciphered>(
    _encode_ToBeEnciphered: __utils.ASN1Encoder<ToBeEnciphered>
) {
    return __utils._encodeBitString;
};

export const id_at_userPassword: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [35],
    id_at
);

export const id_at_userCertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [36],
    id_at
);

export const id_at_cAcertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [37],
    id_at
);

export const id_at_authorityRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [38],
    id_at
);

export const id_at_certificateRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [39],
    id_at
);

export const id_at_crossCertificatePair: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [40],
    id_at
);

export const id_at_attributeCertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [58],
    id_at
);

export const id_at_attributeCertificateRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [59],
    id_at
);

export const id_mr_attributeCertificateMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [42],
    id_mr
);

/* END_MODULE AuthenticationFramework */
