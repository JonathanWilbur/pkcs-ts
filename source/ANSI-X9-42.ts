
/*
    BEGIN_MODULE ANSI-X9-42
    OID: iso.member-body.us.ansi-x942.module.1
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
} from "./__utils";


// TODO: ObjectClassAssignment: FIELD-ID

export class FieldID {
    constructor (
        readonly fieldType: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_FieldID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("fieldType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("parameters", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_FieldID: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_FieldID: __utils.ComponentSpec[] = [
    
];

export const _decode_FieldID = function (el: asn1.ASN1Element): FieldID {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("FieldID contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "fieldType";
    sequence[1].name = "parameters";
    let fieldType!: asn1.OBJECT_IDENTIFIER;
    let parameters!: asn1.ASN1Element;
    fieldType = __utils._decodeObjectIdentifier(sequence[0]);
    parameters = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new FieldID(
        fieldType,
        parameters,

    );
};
export const _encode_FieldID = function (value: FieldID, elGetter: __utils.ASN1Encoder<FieldID>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.fieldType, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.parameters, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type FiniteFields = FieldID; // DefinedType
export const _decode_FiniteFields = _decode_FieldID;
export const _encode_FiniteFields = _encode_FieldID;


// TODO: ObjectSetAssignment: FieldTypes

export class ValidationParms {
    constructor (
        readonly seed: asn1.BIT_STRING,
        readonly pGenCounter: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_ValidationParms: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("seed", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("pGenCounter", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ValidationParms: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ValidationParms: __utils.ComponentSpec[] = [
    
];

export const _decode_ValidationParms = function (el: asn1.ASN1Element): ValidationParms {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ValidationParms contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "seed";
    sequence[1].name = "pGenCounter";
    let seed!: asn1.BIT_STRING;
    let pGenCounter!: asn1.INTEGER;
    seed = __utils._decodeBitString(sequence[0]);
    pGenCounter = __utils._decodeInteger(sequence[1]);
    // TODO: Validate values.
    return new ValidationParms(
        seed,
        pGenCounter,

    );
};
export const _encode_ValidationParms = function (value: ValidationParms, elGetter: __utils.ASN1Encoder<ValidationParms>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeBitString(value.seed, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.pGenCounter, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class DomainParameters {
    constructor (
        readonly p: asn1.INTEGER,
        readonly g: asn1.INTEGER,
        readonly q: asn1.INTEGER,
        readonly j: asn1.INTEGER | undefined,
        readonly validationParms: ValidationParms | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_DomainParameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("p", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("g", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("q", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("j", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("validationParms", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DomainParameters: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_DomainParameters: __utils.ComponentSpec[] = [
    
];

export const _decode_DomainParameters = function (el: asn1.ASN1Element): DomainParameters {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let p!: asn1.INTEGER;
    let g!: asn1.INTEGER;
    let q!: asn1.INTEGER;
    let j: asn1.OPTIONAL<asn1.INTEGER>;
    let validationParms: asn1.OPTIONAL<ValidationParms>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "p": (_el: asn1.ASN1Element): void => { p = __utils._decodeInteger(_el); },
        "g": (_el: asn1.ASN1Element): void => { g = __utils._decodeInteger(_el); },
        "q": (_el: asn1.ASN1Element): void => { q = __utils._decodeInteger(_el); },
        "j": (_el: asn1.ASN1Element): void => { j = __utils._decodeInteger(_el); },
        "validationParms": (_el: asn1.ASN1Element): void => { validationParms = _decode_ValidationParms(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DomainParameters,
        _extension_additions_list_spec_for_DomainParameters,
        _root_component_type_list_2_spec_for_DomainParameters,
        undefined,
    );
    return new DomainParameters( /* SEQUENCE_CONSTRUCTOR_CALL */
        p,
        g,
        q,
        j,
        validationParms
    );
};
export const _encode_DomainParameters = function (value: DomainParameters, elGetter: __utils.ASN1Encoder<DomainParameters>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.p, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.g, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.q, __utils.BER),
            /* IF_ABSENT  */ ((value.j === undefined) ? undefined : __utils._encodeInteger(value.j, __utils.BER)),
            /* IF_ABSENT  */ ((value.validationParms === undefined) ? undefined : _encode_ValidationParms(value.validationParms, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectClassAssignment: ALGORITHM-ID

export class AlgorithmIdentifier {
    constructor (
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("parameters", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    
];

export const _decode_AlgorithmIdentifier = function (el: asn1.ASN1Element): AlgorithmIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let algorithm!: asn1.OBJECT_IDENTIFIER;
    let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "algorithm": (_el: asn1.ASN1Element): void => { algorithm = __utils._decodeObjectIdentifier(_el); },
        "parameters": (_el: asn1.ASN1Element): void => { parameters = __utils._decodeAny(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlgorithmIdentifier,
        _extension_additions_list_spec_for_AlgorithmIdentifier,
        _root_component_type_list_2_spec_for_AlgorithmIdentifier,
        undefined,
    );
    return new AlgorithmIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        algorithm,
        parameters
    );
};
export const _encode_AlgorithmIdentifier = function (value: AlgorithmIdentifier, elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.algorithm, __utils.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : __utils._encodeAny(value.parameters, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SubjectPublicKeyInfo {
    constructor (
        readonly algorithm: AlgorithmIdentifier,
        readonly subjectPublicKey: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("subjectPublicKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_SubjectPublicKeyInfo = function (el: asn1.ASN1Element): SubjectPublicKeyInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SubjectPublicKeyInfo contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithm";
    sequence[1].name = "subjectPublicKey";
    let algorithm!: AlgorithmIdentifier;
    let subjectPublicKey!: asn1.BIT_STRING;
    algorithm = _decode_AlgorithmIdentifier(sequence[0]);
    subjectPublicKey = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new SubjectPublicKeyInfo(
        algorithm,
        subjectPublicKey,

    );
};
export const _encode_SubjectPublicKeyInfo = function (value: SubjectPublicKeyInfo, elGetter: __utils.ASN1Encoder<SubjectPublicKeyInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithm, __utils.BER),
            /* REQUIRED   */ __utils._encodeBitString(value.subjectPublicKey, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: DHPublicNumbers

export type DiffieHellmanPublicNumber = asn1.INTEGER;
export const _decode_DiffieHellmanPublicNumber = __utils._decodeInteger;
export const _encode_DiffieHellmanPublicNumber = __utils._encodeInteger;


export type KeyDerivationMethod = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_KeyDerivationMethod = __utils._decodeObjectIdentifier;
export const _encode_KeyDerivationMethod = __utils._encodeObjectIdentifier;


export class SchemeIdentifier {
    constructor (
        readonly scheme: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SchemeIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("scheme", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("parameters", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SchemeIdentifier: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SchemeIdentifier: __utils.ComponentSpec[] = [
    
];

export const _decode_SchemeIdentifier = function (el: asn1.ASN1Element): SchemeIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let scheme!: asn1.OBJECT_IDENTIFIER;
    let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "scheme": (_el: asn1.ASN1Element): void => { scheme = __utils._decodeObjectIdentifier(_el); },
        "parameters": (_el: asn1.ASN1Element): void => { parameters = __utils._decodeAny(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SchemeIdentifier,
        _extension_additions_list_spec_for_SchemeIdentifier,
        _root_component_type_list_2_spec_for_SchemeIdentifier,
        undefined,
    );
    return new SchemeIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        scheme,
        parameters
    );
};
export const _encode_SchemeIdentifier = function (value: SchemeIdentifier, elGetter: __utils.ASN1Encoder<SchemeIdentifier>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.scheme, __utils.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : __utils._encodeAny(value.parameters, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SchemeOID = asn1.OBJECT_IDENTIFIER; // ObjectClassFieldType
export const _decode_SchemeOID = __utils._decodeObjectIdentifier;
export const _encode_SchemeOID = __utils._encodeObjectIdentifier;


export type SchemeNumber = asn1.ENUMERATED;
export const SchemeNumber_dhStatic_sha1: SchemeNumber = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const dhStatic_sha1: SchemeNumber = SchemeNumber_dhStatic_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SchemeNumber_dhEphem_sha1: SchemeNumber = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const dhEphem_sha1: SchemeNumber = SchemeNumber_dhEphem_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SchemeNumber_dhOneFlow_sha1: SchemeNumber = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const dhOneFlow_sha1: SchemeNumber = SchemeNumber_dhOneFlow_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SchemeNumber_dhHybrid1_sha1: SchemeNumber = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const dhHybrid1_sha1: SchemeNumber = SchemeNumber_dhHybrid1_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SchemeNumber_dhHybrid2_sha1: SchemeNumber = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const dhHybrid2_sha1: SchemeNumber = SchemeNumber_dhHybrid2_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SchemeNumber_dhHybridOneFlow_sha1: SchemeNumber = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const dhHybridOneFlow_sha1: SchemeNumber = SchemeNumber_dhHybridOneFlow_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SchemeNumber_mqv2_sha1: SchemeNumber = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const mqv2_sha1: SchemeNumber = SchemeNumber_mqv2_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SchemeNumber_mqv1_sha1: SchemeNumber = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const mqv1_sha1: SchemeNumber = SchemeNumber_mqv1_sha1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SchemeNumber = __utils._decodeEnumerated;
export const _encode_SchemeNumber = __utils._encodeEnumerated;


export type SchemeSyntax =
    { schemeId: SchemeIdentifier }
    | { oid: SchemeOID }
    | { number_: SchemeNumber };
export const _decode_SchemeSyntax = __utils._decode_inextensible_choice<SchemeSyntax>({
    "UNIVERSAL 16": [ "schemeId", _decode_SchemeIdentifier ],
    "UNIVERSAL 6": [ "oid", _decode_SchemeOID ],
    "UNIVERSAL 10": [ "number_", _decode_SchemeNumber ]
});
export const _encode_SchemeSyntax = __utils._encode_choice<SchemeSyntax>({
    "schemeId": _encode_SchemeIdentifier,
    "oid": _encode_SchemeOID,
    "number_": _encode_SchemeNumber,
}, __utils.BER);


// TODO: ObjectSetAssignment: Schemes

// TODO: ObjectClassAssignment: KEY-AGREEMENT

export type SchemeParameters = AlgorithmIdentifier; // DefinedType
export const _decode_SchemeParameters = _decode_AlgorithmIdentifier;
export const _encode_SchemeParameters = _encode_AlgorithmIdentifier;


// TODO: ObjectSetAssignment: KeyDerivationAlgorithm

export type HMAC = asn1.OCTET_STRING; // OctetStringType
export const _decode_HMAC = __utils._decodeOctetString;
export const _encode_HMAC = __utils._encodeOctetString;


// TODO: ObjectSetAssignment: NamedSchemes

export class OtherInfo {
    constructor (
        readonly keyInfo: AlgorithmIdentifier,
        readonly partyUInfo: asn1.OCTET_STRING | undefined,
        readonly partyVInfo: asn1.OCTET_STRING | undefined,
        readonly suppPubInfo: asn1.OCTET_STRING | undefined,
        readonly suppPrivInfo: asn1.OCTET_STRING | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_OtherInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("keyInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("partyUInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("partyVInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("suppPubInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("suppPrivInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OtherInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OtherInfo: __utils.ComponentSpec[] = [
    
];

export const _decode_OtherInfo = function (el: asn1.ASN1Element): OtherInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let keyInfo!: AlgorithmIdentifier;
    let partyUInfo: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let partyVInfo: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let suppPubInfo: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let suppPrivInfo: asn1.OPTIONAL<asn1.OCTET_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "keyInfo": (_el: asn1.ASN1Element): void => { keyInfo = _decode_AlgorithmIdentifier(_el); },
        "partyUInfo": (_el: asn1.ASN1Element): void => { partyUInfo = __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "partyVInfo": (_el: asn1.ASN1Element): void => { partyVInfo = __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "suppPubInfo": (_el: asn1.ASN1Element): void => { suppPubInfo = __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "suppPrivInfo": (_el: asn1.ASN1Element): void => { suppPrivInfo = __utils._decode_explicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OtherInfo,
        _extension_additions_list_spec_for_OtherInfo,
        _root_component_type_list_2_spec_for_OtherInfo,
        undefined,
    );
    return new OtherInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        keyInfo,
        partyUInfo,
        partyVInfo,
        suppPubInfo,
        suppPrivInfo
    );
};
export const _encode_OtherInfo = function (value: OtherInfo, elGetter: __utils.ASN1Encoder<OtherInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.keyInfo, __utils.BER),
            /* IF_ABSENT  */ ((value.partyUInfo === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeOctetString, __utils.BER)(value.partyUInfo, __utils.BER)),
            /* IF_ABSENT  */ ((value.partyVInfo === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeOctetString, __utils.BER)(value.partyVInfo, __utils.BER)),
            /* IF_ABSENT  */ ((value.suppPubInfo === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeOctetString, __utils.BER)(value.suppPubInfo, __utils.BER)),
            /* IF_ABSENT  */ ((value.suppPrivInfo === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeOctetString, __utils.BER)(value.suppPrivInfo, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: KeySpecificAlgorithms

export type Counter = asn1.OCTET_STRING; // OctetStringType
export const _decode_Counter = __utils._decodeOctetString;
export const _encode_Counter = __utils._encodeOctetString;


export type TripleDES = asn1.INTEGER[]; // SequenceOfType
export const _decode_TripleDES = __utils._decodeSequenceOf<asn1.INTEGER>(() => __utils._decodeInteger);
export const _encode_TripleDES = __utils._encodeSequenceOf<asn1.INTEGER>(() => __utils._encodeInteger, __utils.BER);


export const oneKey: asn1.INTEGER = 1;

export const threeKeys: asn1.INTEGER = 3;

export const ansi_X9_42: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-x942 */ 10046,
]);

export const fieldType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* fieldType */ 0,
], ansi_X9_42);

export const gfPrime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], fieldType);

export const algorithm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* algorithms */ 1,
], ansi_X9_42);

export const tripleDES: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* triple-des */ 2,
], algorithm);

export const numberType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* numberTypes */ 2,
], ansi_X9_42);

export const dhPublicNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], numberType);

export const scheme: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* schemes */ 3,
], ansi_X9_42);

export const dhStatic: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], scheme);

export const dhEphem: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], scheme);

export const dhOneFlow: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], scheme);

export const dhHybrid1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], scheme);

export const dhHybrid2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], scheme);

export const dhHybridOneFlow: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], scheme);

export const mqv2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], scheme);

export const mqv1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], scheme);

export const namedScheme: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* names */ 4,
], ansi_X9_42);

export const dhStatic_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], namedScheme);

export const dhEphem_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], namedScheme);

export const dhOneFlow_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], namedScheme);

export const dhHybrid1_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], namedScheme);

export const dhHybrid2_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], namedScheme);

export const dhHybridOneFlow_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], namedScheme);

export const mqv2_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], namedScheme);

export const mqv1_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], namedScheme);

export const keyDerivationMethod: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* kdMethods */ 5,
], ansi_X9_42);

export const kdasn1der: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* asn1der */ 0,
], keyDerivationMethod);

export const kdConcatenation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* concatenation */ 1,
], keyDerivationMethod);

export const id_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    /* sha1 */ 26,
]);

/* END_MODULE ANSI-X9-42 */
