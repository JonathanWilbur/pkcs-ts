/*
    BEGIN_MODULE ANSI-X9-62
    OID: iso.member-body.us.10045.module.1
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

export const ansi_X9_62: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    10045,
]);

// TODO: ObjectSetAssignment: FieldTypes

export const id_fieldType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* fieldType */ 1],
    ansi_X9_62
);

export const prime_field: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_fieldType
);

export const characteristic_two_field: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_fieldType
);

export type Prime_p = asn1.INTEGER;
export const _decode_Prime_p = __utils._decodeInteger;
export const _encode_Prime_p = __utils._encodeInteger;

export class Characteristic_two {
    constructor(
        readonly m: asn1.INTEGER,
        readonly basis: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_Characteristic_two: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "m",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "basis",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Characteristic_two: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Characteristic_two: __utils.ComponentSpec[] = [];

export const _decode_Characteristic_two = function (
    el: asn1.ASN1Element
): Characteristic_two {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError(
            "Characteristic-two contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "m";
    sequence[1].name = "basis";
    sequence[2].name = "parameters";
    let m!: asn1.INTEGER;
    let basis!: asn1.OBJECT_IDENTIFIER;
    let parameters!: asn1.ASN1Element;
    m = __utils._decodeInteger(sequence[0]);
    basis = __utils._decodeObjectIdentifier(sequence[1]);
    parameters = __utils._decodeAny(sequence[2]);
    // TODO: Validate values.
    return new Characteristic_two(m, basis, parameters);
};
export const _encode_Characteristic_two = function (
    value: Characteristic_two,
    elGetter: __utils.ASN1Encoder<Characteristic_two>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeInteger(value.m, __utils.BER),
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.basis,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeAny(
                    value.parameters,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectSetAssignment: BasisTypes

export type Trinomial = asn1.INTEGER;
export const _decode_Trinomial = __utils._decodeInteger;
export const _encode_Trinomial = __utils._encodeInteger;

export class Pentanomial {
    constructor(
        readonly k1: asn1.INTEGER,
        readonly k2: asn1.INTEGER,
        readonly k3: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_Pentanomial: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "k1",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "k2",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "k3",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Pentanomial: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Pentanomial: __utils.ComponentSpec[] = [];

export const _decode_Pentanomial = function (
    el: asn1.ASN1Element
): Pentanomial {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError(
            "Pentanomial contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "k1";
    sequence[1].name = "k2";
    sequence[2].name = "k3";
    let k1!: asn1.INTEGER;
    let k2!: asn1.INTEGER;
    let k3!: asn1.INTEGER;
    k1 = __utils._decodeInteger(sequence[0]);
    k2 = __utils._decodeInteger(sequence[1]);
    k3 = __utils._decodeInteger(sequence[2]);
    // TODO: Validate values.
    return new Pentanomial(k1, k2, k3);
};
export const _encode_Pentanomial = function (
    value: Pentanomial,
    elGetter: __utils.ASN1Encoder<Pentanomial>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeInteger(value.k1, __utils.BER),
                /* REQUIRED   */ __utils._encodeInteger(value.k2, __utils.BER),
                /* REQUIRED   */ __utils._encodeInteger(value.k3, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectClassAssignment: CHARACTERISTIC-TWO

export const id_characteristic_two_basis: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* basisType */ 3],
    characteristic_two_field
);

export const gnBasis: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_characteristic_two_basis
);

export const tpBasis: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_characteristic_two_basis
);

export const ppBasis: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_characteristic_two_basis
);

export class ECDSA_Sig_Value {
    constructor(readonly r: asn1.INTEGER, readonly s: asn1.INTEGER) {}
}
export const _root_component_type_list_1_spec_for_ECDSA_Sig_Value: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "r",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "s",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ECDSA_Sig_Value: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ECDSA_Sig_Value: __utils.ComponentSpec[] = [];

export const _decode_ECDSA_Sig_Value = function (
    el: asn1.ASN1Element
): ECDSA_Sig_Value {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "ECDSA-Sig-Value contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "r";
    sequence[1].name = "s";
    let r!: asn1.INTEGER;
    let s!: asn1.INTEGER;
    r = __utils._decodeInteger(sequence[0]);
    s = __utils._decodeInteger(sequence[1]);
    // TODO: Validate values.
    return new ECDSA_Sig_Value(r, s);
};
export const _encode_ECDSA_Sig_Value = function (
    value: ECDSA_Sig_Value,
    elGetter: __utils.ASN1Encoder<ECDSA_Sig_Value>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeInteger(value.r, __utils.BER),
                /* REQUIRED   */ __utils._encodeInteger(value.s, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export const id_ecSigType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* signatures */ 4],
    ansi_X9_62
);

export const ecdsa_with_SHA1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_ecSigType
);

// TODO: ObjectClassAssignment: ALGORITHM

export class Algorithmldentifier {
    constructor(
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_Algorithmldentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Algorithmldentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Algorithmldentifier: __utils.ComponentSpec[] = [];

export const _decode_Algorithmldentifier = function (
    el: asn1.ASN1Element
): Algorithmldentifier {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "Algorithmldentifier contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithm";
    sequence[1].name = "parameters";
    let algorithm!: asn1.OBJECT_IDENTIFIER;
    let parameters!: asn1.ASN1Element;
    algorithm = __utils._decodeObjectIdentifier(sequence[0]);
    parameters = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new Algorithmldentifier(algorithm, parameters);
};
export const _encode_Algorithmldentifier = function (
    value: Algorithmldentifier,
    elGetter: __utils.ASN1Encoder<Algorithmldentifier>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.algorithm,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeAny(
                    value.parameters,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class SubjectPublicKeylnfo {
    constructor(
        readonly algorithm: Algorithmldentifier,
        readonly subjectPublicKey: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_SubjectPublicKeylnfo: __utils.ComponentSpec[] = [
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
export const _root_component_type_list_2_spec_for_SubjectPublicKeylnfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SubjectPublicKeylnfo: __utils.ComponentSpec[] = [];

export const _decode_SubjectPublicKeylnfo = function (
    el: asn1.ASN1Element
): SubjectPublicKeylnfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "SubjectPublicKeylnfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithm";
    sequence[1].name = "subjectPublicKey";
    let algorithm!: Algorithmldentifier;
    let subjectPublicKey!: asn1.BIT_STRING;
    algorithm = _decode_Algorithmldentifier(sequence[0]);
    subjectPublicKey = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new SubjectPublicKeylnfo(algorithm, subjectPublicKey);
};
export const _encode_SubjectPublicKeylnfo = function (
    value: SubjectPublicKeylnfo,
    elGetter: __utils.ASN1Encoder<SubjectPublicKeylnfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_Algorithmldentifier(
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

// TODO: ObjectSetAssignment: ECPKAlgorithms

// TODO: ObjectAssignment: ecPublicKeyType

export const id_publicKeyType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* keyType */ 2],
    ansi_X9_62
);

export const id_ecPublicKey: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_publicKeyType
);

export type ECParameters_version = asn1.INTEGER;
export const ECParameters_version_ecpVerl: ECParameters_version = 1; /* LONG_NAMED_INTEGER_VALUE */
export const ecpVerl: ECParameters_version = ECParameters_version_ecpVerl; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ECParameters_version = __utils._decodeInteger;
export const _encode_ECParameters_version = __utils._encodeInteger;

// TODO: ObjectClassAssignment: FIELD-ID

export class FieldID {
    constructor(
        readonly fieldType: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_FieldID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "fieldType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_FieldID: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_FieldID: __utils.ComponentSpec[] = [];

export const _decode_FieldID = function (el: asn1.ASN1Element): FieldID {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "FieldID contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "fieldType";
    sequence[1].name = "parameters";
    let fieldType!: asn1.OBJECT_IDENTIFIER;
    let parameters!: asn1.ASN1Element;
    fieldType = __utils._decodeObjectIdentifier(sequence[0]);
    parameters = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new FieldID(fieldType, parameters);
};
export const _encode_FieldID = function (
    value: FieldID,
    elGetter: __utils.ASN1Encoder<FieldID>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.fieldType,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeAny(
                    value.parameters,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type FieldElement = asn1.OCTET_STRING; // OctetStringType
export const _decode_FieldElement = __utils._decodeOctetString;
export const _encode_FieldElement = __utils._encodeOctetString;

export class Curve {
    constructor(
        readonly a: FieldElement,
        readonly b: FieldElement,
        readonly seed: asn1.BIT_STRING | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_Curve: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "a",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "b",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "seed",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Curve: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Curve: __utils.ComponentSpec[] = [];

export const _decode_Curve = function (el: asn1.ASN1Element): Curve {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let a!: FieldElement;
    let b!: FieldElement;
    let seed: asn1.OPTIONAL<asn1.BIT_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        a: (_el: asn1.ASN1Element): void => {
            a = _decode_FieldElement(_el);
        },
        b: (_el: asn1.ASN1Element): void => {
            b = _decode_FieldElement(_el);
        },
        seed: (_el: asn1.ASN1Element): void => {
            seed = __utils._decodeBitString(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Curve,
        _extension_additions_list_spec_for_Curve,
        _root_component_type_list_2_spec_for_Curve,
        undefined
    );
    return new Curve /* SEQUENCE_CONSTRUCTOR_CALL */(a, b, seed);
};
export const _encode_Curve = function (
    value: Curve,
    elGetter: __utils.ASN1Encoder<Curve>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ _encode_FieldElement(value.a, __utils.BER),
                /* REQUIRED   */ _encode_FieldElement(value.b, __utils.BER),
                /* IF_ABSENT  */ value.seed === undefined
                    ? undefined
                    : __utils._encodeBitString(value.seed, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type ECPoint = asn1.OCTET_STRING; // OctetStringType
export const _decode_ECPoint = __utils._decodeOctetString;
export const _encode_ECPoint = __utils._encodeOctetString;

export class ECParameters {
    constructor(
        readonly version: ECParameters_version,
        readonly fieldID: FieldID,
        readonly curve: Curve,
        readonly base: ECPoint,
        readonly order: asn1.INTEGER,
        readonly cofactor: NTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ECParameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "fieldID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "curve",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "base",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "order",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    /* FIXME: cofactor COULD_NOT_RESOLVE_TYPE_DEF */
];
export const _root_component_type_list_2_spec_for_ECParameters: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ECParameters: __utils.ComponentSpec[] = [];

export const _decode_ECParameters = function (
    el: asn1.ASN1Element
): ECParameters {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: ECParameters_version;
    let fieldID!: FieldID;
    let curve!: Curve;
    let base!: ECPoint;
    let order!: asn1.INTEGER;
    let cofactor: asn1.OPTIONAL<NTEGER>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        version: (_el: asn1.ASN1Element): void => {
            version = _decode_ECParameters_version(_el);
        },
        fieldID: (_el: asn1.ASN1Element): void => {
            fieldID = _decode_FieldID(_el);
        },
        curve: (_el: asn1.ASN1Element): void => {
            curve = _decode_Curve(_el);
        },
        base: (_el: asn1.ASN1Element): void => {
            base = _decode_ECPoint(_el);
        },
        order: (_el: asn1.ASN1Element): void => {
            order = __utils._decodeInteger(_el);
        },
        cofactor: (_el: asn1.ASN1Element): void => {
            cofactor = _decode_NTEGER(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ECParameters,
        _extension_additions_list_spec_for_ECParameters,
        _root_component_type_list_2_spec_for_ECParameters,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new ECParameters /* SEQUENCE_CONSTRUCTOR_CALL */(
        version,
        fieldID,
        curve,
        base,
        order,
        cofactor,
        _unrecognizedExtensionsList
    );
};
export const _encode_ECParameters = function (
    value: ECParameters,
    elGetter: __utils.ASN1Encoder<ECParameters>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_ECParameters_version(
                        value.version,
                        __utils.BER
                    ),
                    /* REQUIRED   */ _encode_FieldID(
                        value.fieldID,
                        __utils.BER
                    ),
                    /* REQUIRED   */ _encode_Curve(value.curve, __utils.BER),
                    /* REQUIRED   */ _encode_ECPoint(value.base, __utils.BER),
                    /* REQUIRED   */ __utils._encodeInteger(
                        value.order,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.cofactor === undefined
                        ? undefined
                        : _encode_NTEGER(value.cofactor, __utils.BER),
                ],
                value._unrecognizedExtensionsList
                    ? value._unrecognizedExtensionsList
                    : []
            )
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type Parameters =
    | { ecParameters: ECParameters }
    | { namedCurve: asn1.OBJECT_IDENTIFIER }
    | { implicitlyCA: asn1.NULL };
export const _decode_Parameters = __utils._decode_inextensible_choice<
    Parameters
>({
    "UNIVERSAL 16": ["ecParameters", _decode_ECParameters],
    "UNIVERSAL 6": ["namedCurve", __utils._decodeObjectIdentifier],
    "UNIVERSAL 5": ["implicitlyCA", __utils._decodeNull],
});
export const _encode_Parameters = __utils._encode_choice<Parameters>(
    {
        ecParameters: _encode_ECParameters,
        namedCurve: __utils._encodeObjectIdentifier,
        implicitlyCA: __utils._encodeNull,
    },
    __utils.BER
);

// TODO: ObjectSetAssignment: CurveNames

// TODO: ObjectClassAssignment: CURVES

export const ellipticCurve: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* curves */ 3],
    ansi_X9_62
);

export const c_TwoCurve: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* characteristicTwo */ 0],
    ellipticCurve
);

export const primeCurve: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* prime */ 1],
    ellipticCurve
);

export const c2pnb163v1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    c_TwoCurve
);

export const c2pnb163v2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    c_TwoCurve
);

export const c2pnb163v3: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    c_TwoCurve
);

export const c2pnb176w1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    c_TwoCurve
);

export const c2tnb191v1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    c_TwoCurve
);

export const c2tnb191v2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    c_TwoCurve
);

export const c2tnbl91v3: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    c_TwoCurve
);

export const c2onb191v4: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    c_TwoCurve
);

export const c2onb191v5: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    c_TwoCurve
);

export const c2pnb208w1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    c_TwoCurve
);

export const c2tnb239v1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    c_TwoCurve
);

export const c2tnb239v2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    c_TwoCurve
);

export const c2tnb239v3: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    c_TwoCurve
);

export const c2onb239v4: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    c_TwoCurve
);

export const c2onb239v5: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    c_TwoCurve
);

export const c2pnb272w1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    c_TwoCurve
);

export const c2pnb304w1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17],
    c_TwoCurve
);

export const c2tnb359v1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [18],
    c_TwoCurve
);

export const c2pnb368w1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [19],
    c_TwoCurve
);

export const c2tnb431r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [20],
    c_TwoCurve
);

export const prime192v1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    primeCurve
);

export const prime192v2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    primeCurve
);

export const prime192v3: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    primeCurve
);

export const prime239v1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    primeCurve
);

export const prime239v2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    primeCurve
);

export const prime239v3: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    primeCurve
);

export const prime256v1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    primeCurve
);

/* END_MODULE ANSI-X9-62 */
