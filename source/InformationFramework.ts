
/*
    BEGIN_MODULE InformationFramework
    OID: joint-iso-itu-t.ds.module.informationFramework.3
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
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    id_oc,
    id_at,
    id_mr,
    id_oa,
    id_sc,
    id_ar,
    id_nf,
    selectedAttributeTypes,
    directoryAbstractService,
    upperBounds
} from "./UsefulDefinitions";
export {
    id_oc,
    id_at,
    id_mr,
    id_oa,
    id_sc,
    id_ar,
    id_nf,
    selectedAttributeTypes,
    directoryAbstractService,
    upperBounds
} from "./UsefulDefinitions";

import * as SelectedAttributeTypes from "./SelectedAttributeTypes";
import {
    commonName,
    generalizedTimeMatch,
    generalizedTimeOrderingMatch,
    booleanMatch,
    integerMatch,
    integerOrderingMatch,
    objectIdentifierFirstComponentMatch,
    integerFirstComponentMatch,
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString
} from "./SelectedAttributeTypes";
export {
    commonName,
    generalizedTimeMatch,
    generalizedTimeOrderingMatch,
    booleanMatch,
    integerMatch,
    integerOrderingMatch,
    objectIdentifierFirstComponentMatch,
    integerFirstComponentMatch,
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString
} from "./SelectedAttributeTypes";

import * as DirectoryAbstractService from "./DirectoryAbstractService";
import {
    TypeAndContextAssertion,
    ServiceControlOptions,
    SearchControlOptions,
    HierarchySelections,
    FamilyGrouping,
    FamilyReturn,
    _decode_TypeAndContextAssertion,
    _encode_TypeAndContextAssertion,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
    _decode_FamilyGrouping,
    _encode_FamilyGrouping,
    _decode_FamilyReturn,
    _encode_FamilyReturn
} from "./DirectoryAbstractService";
export {
    TypeAndContextAssertion,
    ServiceControlOptions,
    SearchControlOptions,
    HierarchySelections,
    FamilyGrouping,
    FamilyReturn,
    _decode_TypeAndContextAssertion,
    _encode_TypeAndContextAssertion,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
    _decode_FamilyGrouping,
    _encode_FamilyGrouping,
    _decode_FamilyReturn,
    _encode_FamilyReturn
} from "./DirectoryAbstractService";

import * as UpperBounds from "./UpperBounds";
import {
    ub_search
} from "./UpperBounds";
export {
    ub_search
} from "./UpperBounds";


export class Context {
    constructor (
        readonly contextType: asn1.OBJECT_IDENTIFIER,
        readonly contextValues: asn1.ASN1Element[],
        readonly fallback: asn1.BOOLEAN | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_Context: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("contextType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("contextValues", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("fallback", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Context: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Context: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_Context__fallback = false;
export const _decode_Context = function (el: asn1.ASN1Element): Context {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let contextType!: asn1.OBJECT_IDENTIFIER;
    let contextValues!: asn1.ASN1Element[];
    let fallback: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_Context__fallback;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "contextType": (_el: asn1.ASN1Element): void => { contextType = __utils._decodeObjectIdentifier(_el); },
        "contextValues": (_el: asn1.ASN1Element): void => { contextValues = __utils._decodeSetOf<asn1.ASN1Element>(() => __utils._decodeAny)(_el); },
        "fallback": (_el: asn1.ASN1Element): void => { fallback = __utils._decodeBoolean(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Context,
        _extension_additions_list_spec_for_Context,
        _root_component_type_list_2_spec_for_Context,
        undefined,
    );
    return new Context( /* SEQUENCE_CONSTRUCTOR_CALL */
        contextType,
        contextValues,
        fallback
    );
};
export const _encode_Context = function (value: Context, elGetter: __utils.ASN1Encoder<Context>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.contextType, __utils.BER),
            /* REQUIRED   */ __utils._encodeSetOf<asn1.ASN1Element>(() => __utils._encodeAny, __utils.BER)(value.contextValues, __utils.BER),
            /* IF_DEFAULT */ (value.fallback === undefined || __utils.deepEq(value.fallback, _default_value_for_Context__fallback) ? undefined : __utils._encodeBoolean(value.fallback, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Attribute_valuesWithContext_Item {
    constructor (
        readonly value: asn1.ASN1Element,
        readonly contextList: Context[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Attribute_valuesWithContext_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("contextList", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Attribute_valuesWithContext_Item: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Attribute_valuesWithContext_Item: __utils.ComponentSpec[] = [
    
];

export const _decode_Attribute_valuesWithContext_Item = function (el: asn1.ASN1Element): Attribute_valuesWithContext_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("Attribute-valuesWithContext-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "value";
    sequence[1].name = "contextList";
    let value!: asn1.ASN1Element;
    let contextList!: Context[];
    value = __utils._decodeAny(sequence[0]);
    contextList = __utils._decodeSetOf<Context>(() => _decode_Context)(sequence[1]);
    // TODO: Validate values.
    return new Attribute_valuesWithContext_Item(
        value,
        contextList,

    );
};
export const _encode_Attribute_valuesWithContext_Item = function (value: Attribute_valuesWithContext_Item, elGetter: __utils.ASN1Encoder<Attribute_valuesWithContext_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeAny(value.value, __utils.BER),
            /* REQUIRED   */ __utils._encodeSetOf<Context>(() => _encode_Context, __utils.BER)(value.contextList, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Attribute {
    constructor (
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly values: asn1.ASN1Element[],
        readonly valuesWithContext: Attribute_valuesWithContext_Item[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_Attribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("values", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("valuesWithContext", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Attribute: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Attribute: __utils.ComponentSpec[] = [
    
];

export const _decode_Attribute = function (el: asn1.ASN1Element): Attribute {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let type_!: asn1.OBJECT_IDENTIFIER;
    let values!: asn1.ASN1Element[];
    let valuesWithContext: asn1.OPTIONAL<Attribute_valuesWithContext_Item[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "type": (_el: asn1.ASN1Element): void => { type_ = __utils._decodeObjectIdentifier(_el); },
        "values": (_el: asn1.ASN1Element): void => { values = __utils._decodeSetOf<asn1.ASN1Element>(() => __utils._decodeAny)(_el); },
        "valuesWithContext": (_el: asn1.ASN1Element): void => { valuesWithContext = __utils._decodeSetOf<Attribute_valuesWithContext_Item>(() => _decode_Attribute_valuesWithContext_Item)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Attribute,
        _extension_additions_list_spec_for_Attribute,
        _root_component_type_list_2_spec_for_Attribute,
        undefined,
    );
    return new Attribute( /* SEQUENCE_CONSTRUCTOR_CALL */
        type_,
        values,
        valuesWithContext
    );
};
export const _encode_Attribute = function (value: Attribute, elGetter: __utils.ASN1Encoder<Attribute>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.type_, __utils.BER),
            /* REQUIRED   */ __utils._encodeSetOf<asn1.ASN1Element>(() => __utils._encodeAny, __utils.BER)(value.values, __utils.BER),
            /* IF_ABSENT  */ ((value.valuesWithContext === undefined) ? undefined : __utils._encodeSetOf<Attribute_valuesWithContext_Item>(() => _encode_Attribute_valuesWithContext_Item, __utils.BER)(value.valuesWithContext, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AttributeValue = asn1.ASN1Element; // ObjectClassFieldType
export const _decode_AttributeValue = __utils._decodeAny;
export const _encode_AttributeValue = __utils._encodeAny;


export class ContextAssertion {
    constructor (
        readonly contextType: asn1.OBJECT_IDENTIFIER,
        readonly contextValues: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_ContextAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("contextType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("contextValues", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ContextAssertion: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ContextAssertion: __utils.ComponentSpec[] = [
    
];

export const _decode_ContextAssertion = function (el: asn1.ASN1Element): ContextAssertion {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ContextAssertion contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "contextType";
    sequence[1].name = "contextValues";
    let contextType!: asn1.OBJECT_IDENTIFIER;
    let contextValues!: asn1.ASN1Element[];
    contextType = __utils._decodeObjectIdentifier(sequence[0]);
    contextValues = __utils._decodeSetOf<asn1.ASN1Element>(() => __utils._decodeAny)(sequence[1]);
    // TODO: Validate values.
    return new ContextAssertion(
        contextType,
        contextValues,

    );
};
export const _encode_ContextAssertion = function (value: ContextAssertion, elGetter: __utils.ASN1Encoder<ContextAssertion>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.contextType, __utils.BER),
            /* REQUIRED   */ __utils._encodeSetOf<asn1.ASN1Element>(() => __utils._encodeAny, __utils.BER)(value.contextValues, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AttributeValueAssertion_assertedContexts =
    { allContexts: asn1.NULL }
    | { selectedContexts: ContextAssertion[] };
export const _decode_AttributeValueAssertion_assertedContexts = __utils._decode_inextensible_choice<AttributeValueAssertion_assertedContexts>({
    "CONTEXT 0": [ "allContexts", __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull) ],
    "CONTEXT 1": [ "selectedContexts", __utils._decode_explicit<ContextAssertion[]>(() => __utils._decodeSetOf<ContextAssertion>(() => _decode_ContextAssertion)) ]
});
export const _encode_AttributeValueAssertion_assertedContexts = __utils._encode_choice<AttributeValueAssertion_assertedContexts>({
    "allContexts": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeNull, __utils.BER),
    "selectedContexts": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSetOf<ContextAssertion>(() => _encode_ContextAssertion, __utils.BER), __utils.BER),
}, __utils.BER);


export class AttributeValueAssertion {
    constructor (
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly assertion: asn1.ASN1Element,
        readonly assertedContexts: AttributeValueAssertion_assertedContexts | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeValueAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("assertion", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("assertedContexts", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AttributeValueAssertion: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AttributeValueAssertion: __utils.ComponentSpec[] = [
    
];

export const _decode_AttributeValueAssertion = function (el: asn1.ASN1Element): AttributeValueAssertion {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let type_!: asn1.OBJECT_IDENTIFIER;
    let assertion!: asn1.ASN1Element;
    let assertedContexts: asn1.OPTIONAL<AttributeValueAssertion_assertedContexts>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "type": (_el: asn1.ASN1Element): void => { type_ = __utils._decodeObjectIdentifier(_el); },
        "assertion": (_el: asn1.ASN1Element): void => { assertion = __utils._decodeAny(_el); },
        "assertedContexts": (_el: asn1.ASN1Element): void => { assertedContexts = _decode_AttributeValueAssertion_assertedContexts(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeValueAssertion,
        _extension_additions_list_spec_for_AttributeValueAssertion,
        _root_component_type_list_2_spec_for_AttributeValueAssertion,
        undefined,
    );
    return new AttributeValueAssertion( /* SEQUENCE_CONSTRUCTOR_CALL */
        type_,
        assertion,
        assertedContexts
    );
};
export const _encode_AttributeValueAssertion = function (value: AttributeValueAssertion, elGetter: __utils.ASN1Encoder<AttributeValueAssertion>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.type_, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.assertion, __utils.BER),
            /* IF_ABSENT  */ ((value.assertedContexts === undefined) ? undefined : _encode_AttributeValueAssertion_assertedContexts(value.assertedContexts, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class AttributeTypeAssertion {
    constructor (
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly assertedContexts: ContextAssertion[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeTypeAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("assertedContexts", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AttributeTypeAssertion: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AttributeTypeAssertion: __utils.ComponentSpec[] = [
    
];

export const _decode_AttributeTypeAssertion = function (el: asn1.ASN1Element): AttributeTypeAssertion {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let type_!: asn1.OBJECT_IDENTIFIER;
    let assertedContexts: asn1.OPTIONAL<ContextAssertion[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "type": (_el: asn1.ASN1Element): void => { type_ = __utils._decodeObjectIdentifier(_el); },
        "assertedContexts": (_el: asn1.ASN1Element): void => { assertedContexts = __utils._decodeSequenceOf<ContextAssertion>(() => _decode_ContextAssertion)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeTypeAssertion,
        _extension_additions_list_spec_for_AttributeTypeAssertion,
        _root_component_type_list_2_spec_for_AttributeTypeAssertion,
        undefined,
    );
    return new AttributeTypeAssertion( /* SEQUENCE_CONSTRUCTOR_CALL */
        type_,
        assertedContexts
    );
};
export const _encode_AttributeTypeAssertion = function (value: AttributeTypeAssertion, elGetter: __utils.ASN1Encoder<AttributeTypeAssertion>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.type_, __utils.BER),
            /* IF_ABSENT  */ ((value.assertedContexts === undefined) ? undefined : __utils._encodeSequenceOf<ContextAssertion>(() => _encode_ContextAssertion, __utils.BER)(value.assertedContexts, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: SupportedAttributes

// TODO: ObjectSetAssignment: SupportedContexts

export class AttributeTypeAndDistinguishedValue_valuesWithContext_Item {
    constructor (
        readonly distingAttrValue: asn1.ASN1Element | undefined,
        readonly contextList: Context[]
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("distingAttrValue", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("contextList", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item: __utils.ComponentSpec[] = [
    
];

export const _decode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item = function (el: asn1.ASN1Element): AttributeTypeAndDistinguishedValue_valuesWithContext_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let distingAttrValue: asn1.OPTIONAL<asn1.ASN1Element>;
    let contextList!: Context[];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "distingAttrValue": (_el: asn1.ASN1Element): void => { distingAttrValue = __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny)(_el); },
        "contextList": (_el: asn1.ASN1Element): void => { contextList = __utils._decodeSetOf<Context>(() => _decode_Context)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item,
        _extension_additions_list_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item,
        _root_component_type_list_2_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item,
        undefined,
    );
    return new AttributeTypeAndDistinguishedValue_valuesWithContext_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        distingAttrValue,
        contextList
    );
};
export const _encode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item = function (value: AttributeTypeAndDistinguishedValue_valuesWithContext_Item, elGetter: __utils.ASN1Encoder<AttributeTypeAndDistinguishedValue_valuesWithContext_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.distingAttrValue === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeAny, __utils.BER)(value.distingAttrValue, __utils.BER)),
            /* REQUIRED   */ __utils._encodeSetOf<Context>(() => _encode_Context, __utils.BER)(value.contextList, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class AttributeTypeAndDistinguishedValue {
    constructor (
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element,
        readonly primaryDistinguished: asn1.BOOLEAN | undefined,
        readonly valuesWithContext: AttributeTypeAndDistinguishedValue_valuesWithContext_Item[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeTypeAndDistinguishedValue: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("primaryDistinguished", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("valuesWithContext", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AttributeTypeAndDistinguishedValue: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AttributeTypeAndDistinguishedValue: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_AttributeTypeAndDistinguishedValue__primaryDistinguished = true;
export const _decode_AttributeTypeAndDistinguishedValue = function (el: asn1.ASN1Element): AttributeTypeAndDistinguishedValue {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let type_!: asn1.OBJECT_IDENTIFIER;
    let value!: asn1.ASN1Element;
    let primaryDistinguished: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_AttributeTypeAndDistinguishedValue__primaryDistinguished;
    let valuesWithContext: asn1.OPTIONAL<AttributeTypeAndDistinguishedValue_valuesWithContext_Item[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "type": (_el: asn1.ASN1Element): void => { type_ = __utils._decodeObjectIdentifier(_el); },
        "value": (_el: asn1.ASN1Element): void => { value = __utils._decodeAny(_el); },
        "primaryDistinguished": (_el: asn1.ASN1Element): void => { primaryDistinguished = __utils._decodeBoolean(_el); },
        "valuesWithContext": (_el: asn1.ASN1Element): void => { valuesWithContext = __utils._decodeSetOf<AttributeTypeAndDistinguishedValue_valuesWithContext_Item>(() => _decode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeTypeAndDistinguishedValue,
        _extension_additions_list_spec_for_AttributeTypeAndDistinguishedValue,
        _root_component_type_list_2_spec_for_AttributeTypeAndDistinguishedValue,
        undefined,
    );
    return new AttributeTypeAndDistinguishedValue( /* SEQUENCE_CONSTRUCTOR_CALL */
        type_,
        value,
        primaryDistinguished,
        valuesWithContext
    );
};
export const _encode_AttributeTypeAndDistinguishedValue = function (value: AttributeTypeAndDistinguishedValue, elGetter: __utils.ASN1Encoder<AttributeTypeAndDistinguishedValue>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.type_, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.value, __utils.BER),
            /* IF_DEFAULT */ (value.primaryDistinguished === undefined || __utils.deepEq(value.primaryDistinguished, _default_value_for_AttributeTypeAndDistinguishedValue__primaryDistinguished) ? undefined : __utils._encodeBoolean(value.primaryDistinguished, __utils.BER)),
            /* IF_ABSENT  */ ((value.valuesWithContext === undefined) ? undefined : __utils._encodeSetOf<AttributeTypeAndDistinguishedValue_valuesWithContext_Item>(() => _encode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item, __utils.BER)(value.valuesWithContext, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type RelativeDistinguishedName = AttributeTypeAndDistinguishedValue[]; // SetOfType
export const _decode_RelativeDistinguishedName = __utils._decodeSetOf<AttributeTypeAndDistinguishedValue>(() => _decode_AttributeTypeAndDistinguishedValue);
export const _encode_RelativeDistinguishedName = __utils._encodeSetOf<AttributeTypeAndDistinguishedValue>(() => _encode_AttributeTypeAndDistinguishedValue, __utils.BER);


export type RDNSequence = RelativeDistinguishedName[]; // SequenceOfType
export const _decode_RDNSequence = __utils._decodeSequenceOf<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName);
export const _encode_RDNSequence = __utils._encodeSequenceOf<RelativeDistinguishedName>(() => _encode_RelativeDistinguishedName, __utils.BER);


export type Name =
    { rdnSequence: RDNSequence };
export const _decode_Name = __utils._decode_inextensible_choice<Name>({
    "UNIVERSAL 16": [ "rdnSequence", _decode_RDNSequence ]
});
export const _encode_Name = __utils._encode_choice<Name>({
    "rdnSequence": _encode_RDNSequence,
}, __utils.BER);


export type DistinguishedName = RDNSequence; // DefinedType
export const _decode_DistinguishedName = _decode_RDNSequence;
export const _encode_DistinguishedName = _encode_RDNSequence;


export type LocalName = RDNSequence; // DefinedType
export const _decode_LocalName = _decode_RDNSequence;
export const _encode_LocalName = _encode_RDNSequence;


export type ChopSpecification_specificExclusions_Item =
    { chopBefore: LocalName }
    | { chopAfter: LocalName };
export const _decode_ChopSpecification_specificExclusions_Item = __utils._decode_inextensible_choice<ChopSpecification_specificExclusions_Item>({
    "CONTEXT 0": [ "chopBefore", __utils._decode_explicit<LocalName>(() => _decode_LocalName) ],
    "CONTEXT 1": [ "chopAfter", __utils._decode_explicit<LocalName>(() => _decode_LocalName) ]
});
export const _encode_ChopSpecification_specificExclusions_Item = __utils._encode_choice<ChopSpecification_specificExclusions_Item>({
    "chopBefore": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_LocalName, __utils.BER),
    "chopAfter": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_LocalName, __utils.BER),
}, __utils.BER);


export type BaseDistance = asn1.INTEGER;
export const _decode_BaseDistance = __utils._decodeInteger;
export const _encode_BaseDistance = __utils._encodeInteger;


export class ChopSpecification {
    constructor (
        readonly specificExclusions: ChopSpecification_specificExclusions_Item[] | undefined,
        readonly minimum: BaseDistance | undefined,
        readonly maximum: BaseDistance | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_ChopSpecification: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("specificExclusions", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("minimum", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("maximum", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ChopSpecification: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ChopSpecification: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_ChopSpecification__minimum = 0;
export const _decode_ChopSpecification = function (el: asn1.ASN1Element): ChopSpecification {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let specificExclusions: asn1.OPTIONAL<ChopSpecification_specificExclusions_Item[]>;
    let minimum: asn1.OPTIONAL<BaseDistance> = _default_value_for_ChopSpecification__minimum;
    let maximum: asn1.OPTIONAL<BaseDistance>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "specificExclusions": (_el: asn1.ASN1Element): void => { specificExclusions = __utils._decode_explicit<ChopSpecification_specificExclusions_Item[]>(() => __utils._decodeSetOf<ChopSpecification_specificExclusions_Item>(() => _decode_ChopSpecification_specificExclusions_Item))(_el); },
        "minimum": (_el: asn1.ASN1Element): void => { minimum = __utils._decode_explicit<BaseDistance>(() => _decode_BaseDistance)(_el); },
        "maximum": (_el: asn1.ASN1Element): void => { maximum = __utils._decode_explicit<BaseDistance>(() => _decode_BaseDistance)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChopSpecification,
        _extension_additions_list_spec_for_ChopSpecification,
        _root_component_type_list_2_spec_for_ChopSpecification,
        undefined,
    );
    return new ChopSpecification( /* SEQUENCE_CONSTRUCTOR_CALL */
        specificExclusions,
        minimum,
        maximum
    );
};
export const _encode_ChopSpecification = function (value: ChopSpecification, elGetter: __utils.ASN1Encoder<ChopSpecification>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.specificExclusions === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSetOf<ChopSpecification_specificExclusions_Item>(() => _encode_ChopSpecification_specificExclusions_Item, __utils.BER), __utils.BER)(value.specificExclusions, __utils.BER)),
            /* IF_DEFAULT */ (value.minimum === undefined || __utils.deepEq(value.minimum, _default_value_for_ChopSpecification__minimum) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_BaseDistance, __utils.BER)(value.minimum, __utils.BER)),
            /* IF_ABSENT  */ ((value.maximum === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_BaseDistance, __utils.BER)(value.maximum, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


/* TODO: CHECK_RECURSIVE_DEFINITION */
export type Refinement =
    { item: asn1.OBJECT_IDENTIFIER }
    | { and: Refinement[] }
    | { or: Refinement[] }
    | { not: Refinement };
export const _decode_Refinement = __utils._decode_inextensible_choice<Refinement>({
    "CONTEXT 0": [ "item", __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier) ],
    "CONTEXT 1": [ "and", __utils._decode_explicit<Refinement[]>(() => __utils._decodeSetOf<Refinement>(() => _decode_Refinement)) ],
    "CONTEXT 2": [ "or", __utils._decode_explicit<Refinement[]>(() => __utils._decodeSetOf<Refinement>(() => _decode_Refinement)) ],
    "CONTEXT 3": [ "not", __utils._decode_explicit<Refinement>(() => _decode_Refinement) ]
});
export const _encode_Refinement = __utils._encode_choice<Refinement>({
    "item": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeObjectIdentifier, __utils.BER),
    "and": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSetOf<Refinement>(() => _encode_Refinement, __utils.BER), __utils.BER),
    "or": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSetOf<Refinement>(() => _encode_Refinement, __utils.BER), __utils.BER),
    "not": __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Refinement, __utils.BER),
}, __utils.BER);


export class SubtreeSpecification {
    constructor (
        readonly base: LocalName | undefined,
        readonly specificExclusions: ChopSpecification_specificExclusions_Item[] | undefined /* REPLICATED_COMPONENT */,
        readonly minimum: BaseDistance | undefined /* REPLICATED_COMPONENT */,
        readonly maximum: BaseDistance | undefined /* REPLICATED_COMPONENT */,
        readonly specificationFilter: Refinement | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SubtreeSpecification: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("base", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("specificExclusions", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("minimum", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("maximum", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("specificationFilter", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SubtreeSpecification: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SubtreeSpecification: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_SubtreeSpecification__base = /* COULD_NOT_COMPILE_DEFAULT_VALUE base */;
export const _default_value_for_SubtreeSpecification__minimum = 0;
export const _decode_SubtreeSpecification = function (el: asn1.ASN1Element): SubtreeSpecification {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let base: asn1.OPTIONAL<LocalName> = _default_value_for_SubtreeSpecification__base;
    let specificExclusions: asn1.OPTIONAL<ChopSpecification_specificExclusions_Item[]>;
    let minimum: asn1.OPTIONAL<BaseDistance> = _default_value_for_SubtreeSpecification__minimum;
    let maximum: asn1.OPTIONAL<BaseDistance>;
    let specificationFilter: asn1.OPTIONAL<Refinement>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "base": (_el: asn1.ASN1Element): void => { base = __utils._decode_explicit<LocalName>(() => _decode_LocalName)(_el); },
        "specificExclusions": (_el: asn1.ASN1Element): void => { specificExclusions = __utils._decode_explicit<ChopSpecification_specificExclusions_Item[]>(() => __utils._decodeSetOf<ChopSpecification_specificExclusions_Item>(() => _decode_ChopSpecification_specificExclusions_Item))(_el); },
        "minimum": (_el: asn1.ASN1Element): void => { minimum = __utils._decode_explicit<BaseDistance>(() => _decode_BaseDistance)(_el); },
        "maximum": (_el: asn1.ASN1Element): void => { maximum = __utils._decode_explicit<BaseDistance>(() => _decode_BaseDistance)(_el); },
        "specificationFilter": (_el: asn1.ASN1Element): void => { specificationFilter = __utils._decode_explicit<Refinement>(() => _decode_Refinement)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubtreeSpecification,
        _extension_additions_list_spec_for_SubtreeSpecification,
        _root_component_type_list_2_spec_for_SubtreeSpecification,
        undefined,
    );
    return new SubtreeSpecification( /* SEQUENCE_CONSTRUCTOR_CALL */
        base,
        specificExclusions,
        minimum,
        maximum,
        specificationFilter
    );
};
export const _encode_SubtreeSpecification = function (value: SubtreeSpecification, elGetter: __utils.ASN1Encoder<SubtreeSpecification>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.base === undefined || __utils.deepEq(value.base, _default_value_for_SubtreeSpecification__base) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_LocalName, __utils.BER)(value.base, __utils.BER)),
            /* IF_ABSENT  */ ((value.specificExclusions === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSetOf<ChopSpecification_specificExclusions_Item>(() => _encode_ChopSpecification_specificExclusions_Item, __utils.BER), __utils.BER)(value.specificExclusions, __utils.BER)),
            /* IF_DEFAULT */ (value.minimum === undefined || __utils.deepEq(value.minimum, _default_value_for_SubtreeSpecification__minimum) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_BaseDistance, __utils.BER)(value.minimum, __utils.BER)),
            /* IF_ABSENT  */ ((value.maximum === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_BaseDistance, __utils.BER)(value.maximum, __utils.BER)),
            /* IF_ABSENT  */ ((value.specificationFilter === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_Refinement, __utils.BER)(value.specificationFilter, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export enum ObjectClassKind {
    abstract = 0,
    structural = 1,
    auxiliary = 2,
}
export const ObjectClassKind_abstract: ObjectClassKind = ObjectClassKind.abstract; /* LONG_NAMED_ENUMERATED_VALUE */
export const abstract: ObjectClassKind = ObjectClassKind.abstract; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ObjectClassKind_structural: ObjectClassKind = ObjectClassKind.structural; /* LONG_NAMED_ENUMERATED_VALUE */
export const structural: ObjectClassKind = ObjectClassKind.structural; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ObjectClassKind_auxiliary: ObjectClassKind = ObjectClassKind.auxiliary; /* LONG_NAMED_ENUMERATED_VALUE */
export const auxiliary: ObjectClassKind = ObjectClassKind.auxiliary; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ObjectClassKind = __utils._decodeEnumerated;
export const _encode_ObjectClassKind = __utils._encodeEnumerated;


// TODO: ObjectClassAssignment: MATCHING-RULE

export enum AttributeUsage {
    userApplications = 0,
    directoryOperation = 1,
    distributedOperation = 2,
    dSAOperation = 3,
}
export const AttributeUsage_userApplications: AttributeUsage = AttributeUsage.userApplications; /* LONG_NAMED_ENUMERATED_VALUE */
export const userApplications: AttributeUsage = AttributeUsage.userApplications; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AttributeUsage_directoryOperation: AttributeUsage = AttributeUsage.directoryOperation; /* LONG_NAMED_ENUMERATED_VALUE */
export const directoryOperation: AttributeUsage = AttributeUsage.directoryOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AttributeUsage_distributedOperation: AttributeUsage = AttributeUsage.distributedOperation; /* LONG_NAMED_ENUMERATED_VALUE */
export const distributedOperation: AttributeUsage = AttributeUsage.distributedOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AttributeUsage_dSAOperation: AttributeUsage = AttributeUsage.dSAOperation; /* LONG_NAMED_ENUMERATED_VALUE */
export const dSAOperation: AttributeUsage = AttributeUsage.dSAOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AttributeUsage = __utils._decodeEnumerated;
export const _encode_AttributeUsage = __utils._encodeEnumerated;


// TODO: ObjectClassAssignment: ATTRIBUTE

// TODO: ObjectClassAssignment: OBJECT-CLASS

// TODO: ObjectAssignment: top

// TODO: ObjectAssignment: alias

// TODO: ObjectAssignment: parent

// TODO: ObjectAssignment: child

// TODO: ObjectAssignment: objectClass

// TODO: ObjectAssignment: aliasedEntryName

// TODO: ObjectAssignment: objectIdentifierMatch

// TODO: ObjectAssignment: distinguishedNameMatch

// TODO: ObjectClassAssignment: MAPPING-BASED-MATCHING

export type RuleIdentifier = asn1.INTEGER;
export const _decode_RuleIdentifier = __utils._decodeInteger;
export const _encode_RuleIdentifier = __utils._encodeInteger;


export class DITStructureRule {
    constructor (
        readonly ruleIdentifier: RuleIdentifier,
        readonly nameForm: asn1.OBJECT_IDENTIFIER,
        readonly superiorStructureRules: RuleIdentifier[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_DITStructureRule: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("ruleIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("nameForm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("superiorStructureRules", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DITStructureRule: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_DITStructureRule: __utils.ComponentSpec[] = [
    
];

export const _decode_DITStructureRule = function (el: asn1.ASN1Element): DITStructureRule {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let ruleIdentifier!: RuleIdentifier;
    let nameForm!: asn1.OBJECT_IDENTIFIER;
    let superiorStructureRules: asn1.OPTIONAL<RuleIdentifier[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "ruleIdentifier": (_el: asn1.ASN1Element): void => { ruleIdentifier = _decode_RuleIdentifier(_el); },
        "nameForm": (_el: asn1.ASN1Element): void => { nameForm = __utils._decodeObjectIdentifier(_el); },
        "superiorStructureRules": (_el: asn1.ASN1Element): void => { superiorStructureRules = __utils._decodeSetOf<RuleIdentifier>(() => _decode_RuleIdentifier)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DITStructureRule,
        _extension_additions_list_spec_for_DITStructureRule,
        _root_component_type_list_2_spec_for_DITStructureRule,
        undefined,
    );
    return new DITStructureRule( /* SEQUENCE_CONSTRUCTOR_CALL */
        ruleIdentifier,
        nameForm,
        superiorStructureRules
    );
};
export const _encode_DITStructureRule = function (value: DITStructureRule, elGetter: __utils.ASN1Encoder<DITStructureRule>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RuleIdentifier(value.ruleIdentifier, __utils.BER),
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.nameForm, __utils.BER),
            /* IF_ABSENT  */ ((value.superiorStructureRules === undefined) ? undefined : __utils._encodeSetOf<RuleIdentifier>(() => _encode_RuleIdentifier, __utils.BER)(value.superiorStructureRules, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectClassAssignment: CONTENT-RULE

export class DITContentRule {
    constructor (
        readonly structuralObjectClass: asn1.OBJECT_IDENTIFIER,
        readonly auxiliaries: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly mandatory: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly optional: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly precluded: asn1.OBJECT_IDENTIFIER[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_DITContentRule: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("structuralObjectClass", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("auxiliaries", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("mandatory", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("optional", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("precluded", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DITContentRule: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_DITContentRule: __utils.ComponentSpec[] = [
    
];

export const _decode_DITContentRule = function (el: asn1.ASN1Element): DITContentRule {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let structuralObjectClass!: asn1.OBJECT_IDENTIFIER;
    let auxiliaries: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let mandatory: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let optional: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let precluded: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "structuralObjectClass": (_el: asn1.ASN1Element): void => { structuralObjectClass = __utils._decodeObjectIdentifier(_el); },
        "auxiliaries": (_el: asn1.ASN1Element): void => { auxiliaries = __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "mandatory": (_el: asn1.ASN1Element): void => { mandatory = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(() => __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier))(_el); },
        "optional": (_el: asn1.ASN1Element): void => { optional = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(() => __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier))(_el); },
        "precluded": (_el: asn1.ASN1Element): void => { precluded = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(() => __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DITContentRule,
        _extension_additions_list_spec_for_DITContentRule,
        _root_component_type_list_2_spec_for_DITContentRule,
        undefined,
    );
    return new DITContentRule( /* SEQUENCE_CONSTRUCTOR_CALL */
        structuralObjectClass,
        auxiliaries,
        mandatory,
        optional,
        precluded
    );
};
export const _encode_DITContentRule = function (value: DITContentRule, elGetter: __utils.ASN1Encoder<DITContentRule>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.structuralObjectClass, __utils.BER),
            /* IF_ABSENT  */ ((value.auxiliaries === undefined) ? undefined : __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER)(value.auxiliaries, __utils.BER)),
            /* IF_ABSENT  */ ((value.mandatory === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER), __utils.BER)(value.mandatory, __utils.BER)),
            /* IF_ABSENT  */ ((value.optional === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER), __utils.BER)(value.optional, __utils.BER)),
            /* IF_ABSENT  */ ((value.precluded === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER), __utils.BER)(value.precluded, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class DITContextUse {
    constructor (
        readonly attributeType: asn1.OBJECT_IDENTIFIER,
        readonly mandatoryContexts: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly optionalContexts: asn1.OBJECT_IDENTIFIER[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_DITContextUse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("attributeType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("mandatoryContexts", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("optionalContexts", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DITContextUse: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_DITContextUse: __utils.ComponentSpec[] = [
    
];

export const _decode_DITContextUse = function (el: asn1.ASN1Element): DITContextUse {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let attributeType!: asn1.OBJECT_IDENTIFIER;
    let mandatoryContexts: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let optionalContexts: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "attributeType": (_el: asn1.ASN1Element): void => { attributeType = __utils._decodeObjectIdentifier(_el); },
        "mandatoryContexts": (_el: asn1.ASN1Element): void => { mandatoryContexts = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(() => __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier))(_el); },
        "optionalContexts": (_el: asn1.ASN1Element): void => { optionalContexts = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(() => __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DITContextUse,
        _extension_additions_list_spec_for_DITContextUse,
        _root_component_type_list_2_spec_for_DITContextUse,
        undefined,
    );
    return new DITContextUse( /* SEQUENCE_CONSTRUCTOR_CALL */
        attributeType,
        mandatoryContexts,
        optionalContexts
    );
};
export const _encode_DITContextUse = function (value: DITContextUse, elGetter: __utils.ASN1Encoder<DITContextUse>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.attributeType, __utils.BER),
            /* IF_ABSENT  */ ((value.mandatoryContexts === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER), __utils.BER)(value.mandatoryContexts, __utils.BER)),
            /* IF_ABSENT  */ ((value.optionalContexts === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER), __utils.BER)(value.optionalContexts, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectClassAssignment: CONTEXT

// TODO: ObjectClassAssignment: DIT-CONTEXT-USE-RULE

// TODO: ObjectAssignment: subentry

// TODO: ObjectClassAssignment: NAME-FORM

// TODO: ObjectAssignment: subentryNameForm

// TODO: ObjectAssignment: accessControlSubentry

// TODO: ObjectAssignment: collectiveAttributeSubentry

// TODO: ObjectAssignment: contextAssertionSubentry

// TODO: ObjectAssignment: serviceAdminSubentry

// TODO: ObjectAssignment: createTimestamp

// TODO: ObjectAssignment: modifyTimestamp

// TODO: ObjectAssignment: subschemaTimestamp

// TODO: ObjectAssignment: creatorsName

// TODO: ObjectAssignment: modifiersName

// TODO: ObjectAssignment: subschemaSubentryList

// TODO: ObjectAssignment: accessControlSubentryList

// TODO: ObjectAssignment: collectiveAttributeSubentryList

// TODO: ObjectAssignment: contextDefaultSubentryList

// TODO: ObjectAssignment: serviceAdminSubentryList

// TODO: ObjectAssignment: hasSubordinates

// TODO: ObjectAssignment: administrativeRole

// TODO: ObjectAssignment: subtreeSpecification

// TODO: ObjectAssignment: collectiveExclusions

// TODO: ObjectAssignment: contextAssertionDefaults

// TODO: ObjectAssignment: searchRules

export class RequestAttribute_defaultValues_Item {
    constructor (
        readonly entryType: asn1.OBJECT_IDENTIFIER | undefined,
        readonly values: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_RequestAttribute_defaultValues_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("entryType", true, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("values", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RequestAttribute_defaultValues_Item: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_RequestAttribute_defaultValues_Item: __utils.ComponentSpec[] = [
    
];

export const _decode_RequestAttribute_defaultValues_Item = function (el: asn1.ASN1Element): RequestAttribute_defaultValues_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let entryType: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let values!: asn1.ASN1Element[];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "entryType": (_el: asn1.ASN1Element): void => { entryType = __utils._decodeObjectIdentifier(_el); },
        "values": (_el: asn1.ASN1Element): void => { values = __utils._decodeSequenceOf<asn1.ASN1Element>(() => __utils._decodeAny)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestAttribute_defaultValues_Item,
        _extension_additions_list_spec_for_RequestAttribute_defaultValues_Item,
        _root_component_type_list_2_spec_for_RequestAttribute_defaultValues_Item,
        undefined,
    );
    return new RequestAttribute_defaultValues_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        entryType,
        values
    );
};
export const _encode_RequestAttribute_defaultValues_Item = function (value: RequestAttribute_defaultValues_Item, elGetter: __utils.ASN1Encoder<RequestAttribute_defaultValues_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.entryType === undefined) ? undefined : __utils._encodeObjectIdentifier(value.entryType, __utils.BER)),
            /* REQUIRED   */ __utils._encodeSequenceOf<asn1.ASN1Element>(() => __utils._encodeAny, __utils.BER)(value.values, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class ContextProfile {
    constructor (
        readonly contextType: asn1.OBJECT_IDENTIFIER,
        readonly contextValue: asn1.ASN1Element[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_ContextProfile: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("contextType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("contextValue", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ContextProfile: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ContextProfile: __utils.ComponentSpec[] = [
    
];

export const _decode_ContextProfile = function (el: asn1.ASN1Element): ContextProfile {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let contextType!: asn1.OBJECT_IDENTIFIER;
    let contextValue: asn1.OPTIONAL<asn1.ASN1Element[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "contextType": (_el: asn1.ASN1Element): void => { contextType = __utils._decodeObjectIdentifier(_el); },
        "contextValue": (_el: asn1.ASN1Element): void => { contextValue = __utils._decodeSequenceOf<asn1.ASN1Element>(() => __utils._decodeAny)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContextProfile,
        _extension_additions_list_spec_for_ContextProfile,
        _root_component_type_list_2_spec_for_ContextProfile,
        undefined,
    );
    return new ContextProfile( /* SEQUENCE_CONSTRUCTOR_CALL */
        contextType,
        contextValue
    );
};
export const _encode_ContextProfile = function (value: ContextProfile, elGetter: __utils.ASN1Encoder<ContextProfile>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.contextType, __utils.BER),
            /* IF_ABSENT  */ ((value.contextValue === undefined) ? undefined : __utils._encodeSequenceOf<asn1.ASN1Element>(() => __utils._encodeAny, __utils.BER)(value.contextValue, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


/* TODO: CHECK_RECURSIVE_DEFINITION */
export type ContextCombination =
    { context: asn1.OBJECT_IDENTIFIER }
    | { and: ContextCombination[] }
    | { or: ContextCombination[] }
    | { not: ContextCombination };
export const _decode_ContextCombination = __utils._decode_inextensible_choice<ContextCombination>({
    "CONTEXT 0": [ "context", __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier) ],
    "CONTEXT 1": [ "and", __utils._decode_explicit<ContextCombination[]>(() => __utils._decodeSequenceOf<ContextCombination>(() => _decode_ContextCombination)) ],
    "CONTEXT 2": [ "or", __utils._decode_explicit<ContextCombination[]>(() => __utils._decodeSequenceOf<ContextCombination>(() => _decode_ContextCombination)) ],
    "CONTEXT 3": [ "not", __utils._decode_explicit<ContextCombination>(() => _decode_ContextCombination) ]
});
export const _encode_ContextCombination = __utils._encode_choice<ContextCombination>({
    "context": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeObjectIdentifier, __utils.BER),
    "and": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSequenceOf<ContextCombination>(() => _encode_ContextCombination, __utils.BER), __utils.BER),
    "or": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSequenceOf<ContextCombination>(() => _encode_ContextCombination, __utils.BER), __utils.BER),
    "not": __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_ContextCombination, __utils.BER),
}, __utils.BER);


export class MatchingUse {
    constructor (
        readonly restrictionType: asn1.OBJECT_IDENTIFIER,
        readonly restrictionValue: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_MatchingUse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("restrictionType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("restrictionValue", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_MatchingUse: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_MatchingUse: __utils.ComponentSpec[] = [
    
];

export const _decode_MatchingUse = function (el: asn1.ASN1Element): MatchingUse {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("MatchingUse contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "restrictionType";
    sequence[1].name = "restrictionValue";
    let restrictionType!: asn1.OBJECT_IDENTIFIER;
    let restrictionValue!: asn1.ASN1Element;
    restrictionType = __utils._decodeObjectIdentifier(sequence[0]);
    restrictionValue = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new MatchingUse(
        restrictionType,
        restrictionValue,

    );
};
export const _encode_MatchingUse = function (value: MatchingUse, elGetter: __utils.ASN1Encoder<MatchingUse>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.restrictionType, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.restrictionValue, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class RequestAttribute {
    constructor (
        readonly attributeType: asn1.OBJECT_IDENTIFIER,
        readonly includeSubtypes: asn1.BOOLEAN | undefined,
        readonly selectedValues: asn1.ASN1Element[] | undefined,
        readonly defaultValues: RequestAttribute_defaultValues_Item[] | undefined,
        readonly contexts: ContextProfile[] | undefined,
        readonly contextCombination: ContextCombination | undefined,
        readonly matchingUse: MatchingUse[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_RequestAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("attributeType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("includeSubtypes", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("selectedValues", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("defaultValues", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("contexts", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("contextCombination", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("matchingUse", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RequestAttribute: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_RequestAttribute: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_RequestAttribute__includeSubtypes = false;
export const _default_value_for_RequestAttribute__contextCombination = /* COULD_NOT_COMPILE_DEFAULT_VALUE contextCombination */;
export const _decode_RequestAttribute = function (el: asn1.ASN1Element): RequestAttribute {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let attributeType!: asn1.OBJECT_IDENTIFIER;
    let includeSubtypes: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_RequestAttribute__includeSubtypes;
    let selectedValues: asn1.OPTIONAL<asn1.ASN1Element[]>;
    let defaultValues: asn1.OPTIONAL<RequestAttribute_defaultValues_Item[]>;
    let contexts: asn1.OPTIONAL<ContextProfile[]>;
    let contextCombination: asn1.OPTIONAL<ContextCombination> = _default_value_for_RequestAttribute__contextCombination;
    let matchingUse: asn1.OPTIONAL<MatchingUse[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "attributeType": (_el: asn1.ASN1Element): void => { attributeType = __utils._decodeObjectIdentifier(_el); },
        "includeSubtypes": (_el: asn1.ASN1Element): void => { includeSubtypes = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "selectedValues": (_el: asn1.ASN1Element): void => { selectedValues = __utils._decode_explicit<asn1.ASN1Element[]>(() => __utils._decodeSequenceOf<asn1.ASN1Element>(() => __utils._decodeAny))(_el); },
        "defaultValues": (_el: asn1.ASN1Element): void => { defaultValues = __utils._decode_explicit<RequestAttribute_defaultValues_Item[]>(() => __utils._decodeSequenceOf<RequestAttribute_defaultValues_Item>(() => _decode_RequestAttribute_defaultValues_Item))(_el); },
        "contexts": (_el: asn1.ASN1Element): void => { contexts = __utils._decode_explicit<ContextProfile[]>(() => __utils._decodeSequenceOf<ContextProfile>(() => _decode_ContextProfile))(_el); },
        "contextCombination": (_el: asn1.ASN1Element): void => { contextCombination = __utils._decode_explicit<ContextCombination>(() => _decode_ContextCombination)(_el); },
        "matchingUse": (_el: asn1.ASN1Element): void => { matchingUse = __utils._decode_explicit<MatchingUse[]>(() => __utils._decodeSequenceOf<MatchingUse>(() => _decode_MatchingUse))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestAttribute,
        _extension_additions_list_spec_for_RequestAttribute,
        _root_component_type_list_2_spec_for_RequestAttribute,
        undefined,
    );
    return new RequestAttribute( /* SEQUENCE_CONSTRUCTOR_CALL */
        attributeType,
        includeSubtypes,
        selectedValues,
        defaultValues,
        contexts,
        contextCombination,
        matchingUse
    );
};
export const _encode_RequestAttribute = function (value: RequestAttribute, elGetter: __utils.ASN1Encoder<RequestAttribute>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.attributeType, __utils.BER),
            /* IF_DEFAULT */ (value.includeSubtypes === undefined || __utils.deepEq(value.includeSubtypes, _default_value_for_RequestAttribute__includeSubtypes) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeBoolean, __utils.BER)(value.includeSubtypes, __utils.BER)),
            /* IF_ABSENT  */ ((value.selectedValues === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSequenceOf<asn1.ASN1Element>(() => __utils._encodeAny, __utils.BER), __utils.BER)(value.selectedValues, __utils.BER)),
            /* IF_ABSENT  */ ((value.defaultValues === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSequenceOf<RequestAttribute_defaultValues_Item>(() => _encode_RequestAttribute_defaultValues_Item, __utils.BER), __utils.BER)(value.defaultValues, __utils.BER)),
            /* IF_ABSENT  */ ((value.contexts === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeSequenceOf<ContextProfile>(() => _encode_ContextProfile, __utils.BER), __utils.BER)(value.contexts, __utils.BER)),
            /* IF_DEFAULT */ (value.contextCombination === undefined || __utils.deepEq(value.contextCombination, _default_value_for_RequestAttribute__contextCombination) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_ContextCombination, __utils.BER)(value.contextCombination, __utils.BER)),
            /* IF_ABSENT  */ ((value.matchingUse === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeSequenceOf<MatchingUse>(() => _encode_MatchingUse, __utils.BER), __utils.BER)(value.matchingUse, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AttributeType = asn1.OBJECT_IDENTIFIER; // ObjectClassFieldType
export const _decode_AttributeType = __utils._decodeObjectIdentifier;
export const _encode_AttributeType = __utils._encodeObjectIdentifier;


/* TODO: CHECK_RECURSIVE_DEFINITION */
export type AttributeCombination =
    { attribute: AttributeType }
    | { and: AttributeCombination[] }
    | { or: AttributeCombination[] }
    | { not: AttributeCombination };
export const _decode_AttributeCombination = __utils._decode_inextensible_choice<AttributeCombination>({
    "CONTEXT 0": [ "attribute", __utils._decode_explicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 1": [ "and", __utils._decode_explicit<AttributeCombination[]>(() => __utils._decodeSequenceOf<AttributeCombination>(() => _decode_AttributeCombination)) ],
    "CONTEXT 2": [ "or", __utils._decode_explicit<AttributeCombination[]>(() => __utils._decodeSequenceOf<AttributeCombination>(() => _decode_AttributeCombination)) ],
    "CONTEXT 3": [ "not", __utils._decode_explicit<AttributeCombination>(() => _decode_AttributeCombination) ]
});
export const _encode_AttributeCombination = __utils._encode_choice<AttributeCombination>({
    "attribute": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_AttributeType, __utils.BER),
    "and": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSequenceOf<AttributeCombination>(() => _encode_AttributeCombination, __utils.BER), __utils.BER),
    "or": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSequenceOf<AttributeCombination>(() => _encode_AttributeCombination, __utils.BER), __utils.BER),
    "not": __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_AttributeCombination, __utils.BER),
}, __utils.BER);


export type ResultAttribute_outputValues =
    { selectedValues: asn1.ASN1Element[] }
    | { matchedValuesOnly: asn1.NULL };
export const _decode_ResultAttribute_outputValues = __utils._decode_inextensible_choice<ResultAttribute_outputValues>({
    "UNIVERSAL 16": [ "selectedValues", __utils._decodeSequenceOf<asn1.ASN1Element>(() => __utils._decodeAny) ],
    "UNIVERSAL 5": [ "matchedValuesOnly", __utils._decodeNull ]
});
export const _encode_ResultAttribute_outputValues = __utils._encode_choice<ResultAttribute_outputValues>({
    "selectedValues": __utils._encodeSequenceOf<asn1.ASN1Element>(() => __utils._encodeAny, __utils.BER),
    "matchedValuesOnly": __utils._encodeNull,
}, __utils.BER);


export class ResultAttribute {
    constructor (
        readonly attributeType: asn1.OBJECT_IDENTIFIER,
        readonly outputValues: ResultAttribute_outputValues | undefined,
        readonly contexts: ContextProfile[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_ResultAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("attributeType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("outputValues", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("contexts", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ResultAttribute: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ResultAttribute: __utils.ComponentSpec[] = [
    
];

export const _decode_ResultAttribute = function (el: asn1.ASN1Element): ResultAttribute {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let attributeType!: asn1.OBJECT_IDENTIFIER;
    let outputValues: asn1.OPTIONAL<ResultAttribute_outputValues>;
    let contexts: asn1.OPTIONAL<ContextProfile[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "attributeType": (_el: asn1.ASN1Element): void => { attributeType = __utils._decodeObjectIdentifier(_el); },
        "outputValues": (_el: asn1.ASN1Element): void => { outputValues = _decode_ResultAttribute_outputValues(_el); },
        "contexts": (_el: asn1.ASN1Element): void => { contexts = __utils._decode_explicit<ContextProfile[]>(() => __utils._decodeSequenceOf<ContextProfile>(() => _decode_ContextProfile))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResultAttribute,
        _extension_additions_list_spec_for_ResultAttribute,
        _root_component_type_list_2_spec_for_ResultAttribute,
        undefined,
    );
    return new ResultAttribute( /* SEQUENCE_CONSTRUCTOR_CALL */
        attributeType,
        outputValues,
        contexts
    );
};
export const _encode_ResultAttribute = function (value: ResultAttribute, elGetter: __utils.ASN1Encoder<ResultAttribute>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.attributeType, __utils.BER),
            /* IF_ABSENT  */ ((value.outputValues === undefined) ? undefined : _encode_ResultAttribute_outputValues(value.outputValues, __utils.BER)),
            /* IF_ABSENT  */ ((value.contexts === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSequenceOf<ContextProfile>(() => _encode_ContextProfile, __utils.BER), __utils.BER)(value.contexts, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class ControlOptions {
    constructor (
        readonly serviceControls: ServiceControlOptions | undefined,
        readonly searchOptions: SearchControlOptions | undefined,
        readonly hierarchyOptions: HierarchySelections | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_ControlOptions: __utils.ComponentSpec[] = [
    /* FIXME: serviceControls COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: searchOptions COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: hierarchyOptions COULD_NOT_RESOLVE_TYPE_DEF */
];
export const _root_component_type_list_2_spec_for_ControlOptions: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ControlOptions: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_ControlOptions__serviceControls = /* COULD_NOT_COMPILE_DEFAULT_VALUE serviceControls */;
export const _default_value_for_ControlOptions__searchOptions = /* COULD_NOT_COMPILE_DEFAULT_VALUE searchOptions */;
export const _decode_ControlOptions = function (el: asn1.ASN1Element): ControlOptions {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let serviceControls: asn1.OPTIONAL<ServiceControlOptions> = _default_value_for_ControlOptions__serviceControls;
    let searchOptions: asn1.OPTIONAL<SearchControlOptions> = _default_value_for_ControlOptions__searchOptions;
    let hierarchyOptions: asn1.OPTIONAL<HierarchySelections>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "serviceControls": (_el: asn1.ASN1Element): void => { serviceControls = __utils._decode_explicit<ServiceControlOptions>(() => _decode_ServiceControlOptions)(_el); },
        "searchOptions": (_el: asn1.ASN1Element): void => { searchOptions = __utils._decode_explicit<SearchControlOptions>(() => _decode_SearchControlOptions)(_el); },
        "hierarchyOptions": (_el: asn1.ASN1Element): void => { hierarchyOptions = __utils._decode_explicit<HierarchySelections>(() => _decode_HierarchySelections)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ControlOptions,
        _extension_additions_list_spec_for_ControlOptions,
        _root_component_type_list_2_spec_for_ControlOptions,
        undefined,
    );
    return new ControlOptions( /* SEQUENCE_CONSTRUCTOR_CALL */
        serviceControls,
        searchOptions,
        hierarchyOptions
    );
};
export const _encode_ControlOptions = function (value: ControlOptions, elGetter: __utils.ASN1Encoder<ControlOptions>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.serviceControls === undefined || __utils.deepEq(value.serviceControls, _default_value_for_ControlOptions__serviceControls) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_ServiceControlOptions, __utils.BER)(value.serviceControls, __utils.BER)),
            /* IF_DEFAULT */ (value.searchOptions === undefined || __utils.deepEq(value.searchOptions, _default_value_for_ControlOptions__searchOptions) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_SearchControlOptions, __utils.BER)(value.searchOptions, __utils.BER)),
            /* IF_ABSENT  */ ((value.hierarchyOptions === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_HierarchySelections, __utils.BER)(value.hierarchyOptions, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Mapping {
    constructor (
        readonly mappingFunction: asn1.OBJECT_IDENTIFIER,
        readonly level: asn1.INTEGER | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_Mapping: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("mappingFunction", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("level", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Mapping: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Mapping: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_Mapping__level = 0;
export const _decode_Mapping = function (el: asn1.ASN1Element): Mapping {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let mappingFunction!: asn1.OBJECT_IDENTIFIER;
    let level: asn1.OPTIONAL<asn1.INTEGER> = _default_value_for_Mapping__level;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "mappingFunction": (_el: asn1.ASN1Element): void => { mappingFunction = __utils._decodeObjectIdentifier(_el); },
        "level": (_el: asn1.ASN1Element): void => { level = __utils._decodeInteger(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Mapping,
        _extension_additions_list_spec_for_Mapping,
        _root_component_type_list_2_spec_for_Mapping,
        undefined,
    );
    return new Mapping( /* SEQUENCE_CONSTRUCTOR_CALL */
        mappingFunction,
        level
    );
};
export const _encode_Mapping = function (value: Mapping, elGetter: __utils.ASN1Encoder<Mapping>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.mappingFunction, __utils.BER),
            /* IF_DEFAULT */ (value.level === undefined || __utils.deepEq(value.level, _default_value_for_Mapping__level) ? undefined : __utils._encodeInteger(value.level, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class MRSubstitution {
    constructor (
        readonly attribute: AttributeType,
        readonly oldMatchingRule: asn1.OBJECT_IDENTIFIER | undefined,
        readonly newMatchingRule: asn1.OBJECT_IDENTIFIER | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_MRSubstitution: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("attribute", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("oldMatchingRule", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("newMatchingRule", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_MRSubstitution: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_MRSubstitution: __utils.ComponentSpec[] = [
    
];

export const _decode_MRSubstitution = function (el: asn1.ASN1Element): MRSubstitution {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let attribute!: AttributeType;
    let oldMatchingRule: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let newMatchingRule: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "attribute": (_el: asn1.ASN1Element): void => { attribute = _decode_AttributeType(_el); },
        "oldMatchingRule": (_el: asn1.ASN1Element): void => { oldMatchingRule = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "newMatchingRule": (_el: asn1.ASN1Element): void => { newMatchingRule = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MRSubstitution,
        _extension_additions_list_spec_for_MRSubstitution,
        _root_component_type_list_2_spec_for_MRSubstitution,
        undefined,
    );
    return new MRSubstitution( /* SEQUENCE_CONSTRUCTOR_CALL */
        attribute,
        oldMatchingRule,
        newMatchingRule
    );
};
export const _encode_MRSubstitution = function (value: MRSubstitution, elGetter: __utils.ASN1Encoder<MRSubstitution>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeType(value.attribute, __utils.BER),
            /* IF_ABSENT  */ ((value.oldMatchingRule === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeObjectIdentifier, __utils.BER)(value.oldMatchingRule, __utils.BER)),
            /* IF_ABSENT  */ ((value.newMatchingRule === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeObjectIdentifier, __utils.BER)(value.newMatchingRule, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class MRMapping {
    constructor (
        readonly mapping: Mapping[] | undefined,
        readonly substitution: MRSubstitution[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_MRMapping: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("mapping", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("substitution", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_MRMapping: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_MRMapping: __utils.ComponentSpec[] = [
    
];

export const _decode_MRMapping = function (el: asn1.ASN1Element): MRMapping {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let mapping: asn1.OPTIONAL<Mapping[]>;
    let substitution: asn1.OPTIONAL<MRSubstitution[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "mapping": (_el: asn1.ASN1Element): void => { mapping = __utils._decode_explicit<Mapping[]>(() => __utils._decodeSequenceOf<Mapping>(() => _decode_Mapping))(_el); },
        "substitution": (_el: asn1.ASN1Element): void => { substitution = __utils._decode_explicit<MRSubstitution[]>(() => __utils._decodeSequenceOf<MRSubstitution>(() => _decode_MRSubstitution))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MRMapping,
        _extension_additions_list_spec_for_MRMapping,
        _root_component_type_list_2_spec_for_MRMapping,
        undefined,
    );
    return new MRMapping( /* SEQUENCE_CONSTRUCTOR_CALL */
        mapping,
        substitution
    );
};
export const _encode_MRMapping = function (value: MRMapping, elGetter: __utils.ASN1Encoder<MRMapping>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.mapping === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSequenceOf<Mapping>(() => _encode_Mapping, __utils.BER), __utils.BER)(value.mapping, __utils.BER)),
            /* IF_ABSENT  */ ((value.substitution === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSequenceOf<MRSubstitution>(() => _encode_MRSubstitution, __utils.BER), __utils.BER)(value.substitution, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class RelaxationPolicy {
    constructor (
        readonly basic: MRMapping | undefined,
        readonly tightenings: MRMapping[] | undefined,
        readonly relaxations: MRMapping[] | undefined,
        readonly maximum: asn1.INTEGER | undefined,
        readonly minimum: asn1.INTEGER | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_RelaxationPolicy: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("basic", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("tightenings", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("relaxations", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("maximum", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("minimum", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RelaxationPolicy: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_RelaxationPolicy: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_RelaxationPolicy__basic = /* COULD_NOT_COMPILE_DEFAULT_VALUE basic */;
export const _default_value_for_RelaxationPolicy__minimum = 1;
export const _decode_RelaxationPolicy = function (el: asn1.ASN1Element): RelaxationPolicy {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let basic: asn1.OPTIONAL<MRMapping> = _default_value_for_RelaxationPolicy__basic;
    let tightenings: asn1.OPTIONAL<MRMapping[]>;
    let relaxations: asn1.OPTIONAL<MRMapping[]>;
    let maximum: asn1.OPTIONAL<asn1.INTEGER>;
    let minimum: asn1.OPTIONAL<asn1.INTEGER> = _default_value_for_RelaxationPolicy__minimum;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "basic": (_el: asn1.ASN1Element): void => { basic = __utils._decode_explicit<MRMapping>(() => _decode_MRMapping)(_el); },
        "tightenings": (_el: asn1.ASN1Element): void => { tightenings = __utils._decode_explicit<MRMapping[]>(() => __utils._decodeSequenceOf<MRMapping>(() => _decode_MRMapping))(_el); },
        "relaxations": (_el: asn1.ASN1Element): void => { relaxations = __utils._decode_explicit<MRMapping[]>(() => __utils._decodeSequenceOf<MRMapping>(() => _decode_MRMapping))(_el); },
        "maximum": (_el: asn1.ASN1Element): void => { maximum = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "minimum": (_el: asn1.ASN1Element): void => { minimum = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RelaxationPolicy,
        _extension_additions_list_spec_for_RelaxationPolicy,
        _root_component_type_list_2_spec_for_RelaxationPolicy,
        undefined,
    );
    return new RelaxationPolicy( /* SEQUENCE_CONSTRUCTOR_CALL */
        basic,
        tightenings,
        relaxations,
        maximum,
        minimum
    );
};
export const _encode_RelaxationPolicy = function (value: RelaxationPolicy, elGetter: __utils.ASN1Encoder<RelaxationPolicy>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.basic === undefined || __utils.deepEq(value.basic, _default_value_for_RelaxationPolicy__basic) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_MRMapping, __utils.BER)(value.basic, __utils.BER)),
            /* IF_ABSENT  */ ((value.tightenings === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSequenceOf<MRMapping>(() => _encode_MRMapping, __utils.BER), __utils.BER)(value.tightenings, __utils.BER)),
            /* IF_ABSENT  */ ((value.relaxations === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSequenceOf<MRMapping>(() => _encode_MRMapping, __utils.BER), __utils.BER)(value.relaxations, __utils.BER)),
            /* IF_ABSENT  */ ((value.maximum === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeInteger, __utils.BER)(value.maximum, __utils.BER)),
            /* IF_DEFAULT */ (value.minimum === undefined || __utils.deepEq(value.minimum, _default_value_for_RelaxationPolicy__minimum) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeInteger, __utils.BER)(value.minimum, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AllowedSubset = asn1.BIT_STRING;
export const AllowedSubset_baseObject: number = 0; /* LONG_NAMED_BIT */
export const baseObject: number = AllowedSubset_baseObject; /* SHORT_NAMED_BIT */
export const AllowedSubset_oneLevel: number = 1; /* LONG_NAMED_BIT */
export const oneLevel: number = AllowedSubset_oneLevel; /* SHORT_NAMED_BIT */
export const AllowedSubset_wholeSubtree: number = 2; /* LONG_NAMED_BIT */
export const wholeSubtree: number = AllowedSubset_wholeSubtree; /* SHORT_NAMED_BIT */
export const _decode_AllowedSubset = __utils._decodeBitString;
export const _encode_AllowedSubset = __utils._encodeBitString;


export enum ImposedSubset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}
export const ImposedSubset_baseObject: ImposedSubset = ImposedSubset.baseObject; /* LONG_NAMED_ENUMERATED_VALUE */
export const baseObject: ImposedSubset = ImposedSubset.baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ImposedSubset_oneLevel: ImposedSubset = ImposedSubset.oneLevel; /* LONG_NAMED_ENUMERATED_VALUE */
export const oneLevel: ImposedSubset = ImposedSubset.oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ImposedSubset_wholeSubtree: ImposedSubset = ImposedSubset.wholeSubtree; /* LONG_NAMED_ENUMERATED_VALUE */
export const wholeSubtree: ImposedSubset = ImposedSubset.wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ImposedSubset = __utils._decodeEnumerated;
export const _encode_ImposedSubset = __utils._encodeEnumerated;


export class EntryLimit {
    constructor (
        readonly default_: asn1.INTEGER,
        readonly max: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_EntryLimit: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("default", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("max", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EntryLimit: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EntryLimit: __utils.ComponentSpec[] = [
    
];

export const _decode_EntryLimit = function (el: asn1.ASN1Element): EntryLimit {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("EntryLimit contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "default";
    sequence[1].name = "max";
    let default_!: asn1.INTEGER;
    let max!: asn1.INTEGER;
    default_ = __utils._decodeInteger(sequence[0]);
    max = __utils._decodeInteger(sequence[1]);
    // TODO: Validate values.
    return new EntryLimit(
        default_,
        max,

    );
};
export const _encode_EntryLimit = function (value: EntryLimit, elGetter: __utils.ASN1Encoder<EntryLimit>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.default_, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.max, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SearchRule {
    constructor (
        readonly id: asn1.INTEGER /* REPLICATED_COMPONENT */,
        readonly dmdId: asn1.OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        readonly serviceType: asn1.OBJECT_IDENTIFIER | undefined,
        readonly userClass: asn1.INTEGER | undefined,
        readonly inputAttributeTypes: RequestAttribute[] | undefined,
        readonly attributeCombination: AttributeCombination | undefined,
        readonly outputAttributeTypes: ResultAttribute[] | undefined,
        readonly defaultControls: ControlOptions | undefined,
        readonly mandatoryControls: ControlOptions | undefined,
        readonly searchRuleControls: ControlOptions | undefined,
        readonly familyGrouping: FamilyGrouping | undefined,
        readonly familyReturn: FamilyReturn | undefined,
        readonly relaxation: RelaxationPolicy | undefined,
        readonly additionalControl: AttributeType[] | undefined,
        readonly allowedSubset: AllowedSubset | undefined,
        readonly imposedSubset: ImposedSubset | undefined,
        readonly entryLimit: EntryLimit | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SearchRule: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("dmdId", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("serviceType", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("userClass", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("inputAttributeTypes", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("attributeCombination", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("outputAttributeTypes", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("defaultControls", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("mandatoryControls", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("searchRuleControls", true, __utils.hasTag(asn1.ASN1TagClass.context, 8), undefined, undefined),
    /* FIXME: familyGrouping COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: familyReturn COULD_NOT_RESOLVE_TYPE_DEF */,
    new __utils.ComponentSpec("relaxation", true, __utils.hasTag(asn1.ASN1TagClass.context, 11), undefined, undefined),
    new __utils.ComponentSpec("additionalControl", true, __utils.hasTag(asn1.ASN1TagClass.context, 12), undefined, undefined),
    new __utils.ComponentSpec("allowedSubset", true, __utils.hasTag(asn1.ASN1TagClass.context, 13), undefined, undefined),
    new __utils.ComponentSpec("imposedSubset", true, __utils.hasTag(asn1.ASN1TagClass.context, 14), undefined, undefined),
    new __utils.ComponentSpec("entryLimit", true, __utils.hasTag(asn1.ASN1TagClass.context, 15), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SearchRule: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SearchRule: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_SearchRule__attributeCombination = /* COULD_NOT_COMPILE_DEFAULT_VALUE attributeCombination */;
export const _default_value_for_SearchRule__allowedSubset = new Uint8ClampedArray([ 1, 1, 1 ]);
export const _decode_SearchRule = function (el: asn1.ASN1Element): SearchRule {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let id!: asn1.INTEGER;
    let dmdId!: asn1.OBJECT_IDENTIFIER;
    let serviceType: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let userClass: asn1.OPTIONAL<asn1.INTEGER>;
    let inputAttributeTypes: asn1.OPTIONAL<RequestAttribute[]>;
    let attributeCombination: asn1.OPTIONAL<AttributeCombination> = _default_value_for_SearchRule__attributeCombination;
    let outputAttributeTypes: asn1.OPTIONAL<ResultAttribute[]>;
    let defaultControls: asn1.OPTIONAL<ControlOptions>;
    let mandatoryControls: asn1.OPTIONAL<ControlOptions>;
    let searchRuleControls: asn1.OPTIONAL<ControlOptions>;
    let familyGrouping: asn1.OPTIONAL<FamilyGrouping>;
    let familyReturn: asn1.OPTIONAL<FamilyReturn>;
    let relaxation: asn1.OPTIONAL<RelaxationPolicy>;
    let additionalControl: asn1.OPTIONAL<AttributeType[]>;
    let allowedSubset: asn1.OPTIONAL<AllowedSubset> = _default_value_for_SearchRule__allowedSubset;
    let imposedSubset: asn1.OPTIONAL<ImposedSubset>;
    let entryLimit: asn1.OPTIONAL<EntryLimit>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "id": (_el: asn1.ASN1Element): void => { id = __utils._decodeInteger(_el); },
        "dmdId": (_el: asn1.ASN1Element): void => { dmdId = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "serviceType": (_el: asn1.ASN1Element): void => { serviceType = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "userClass": (_el: asn1.ASN1Element): void => { userClass = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "inputAttributeTypes": (_el: asn1.ASN1Element): void => { inputAttributeTypes = __utils._decode_explicit<RequestAttribute[]>(() => __utils._decodeSequenceOf<RequestAttribute>(() => _decode_RequestAttribute))(_el); },
        "attributeCombination": (_el: asn1.ASN1Element): void => { attributeCombination = __utils._decode_explicit<AttributeCombination>(() => _decode_AttributeCombination)(_el); },
        "outputAttributeTypes": (_el: asn1.ASN1Element): void => { outputAttributeTypes = __utils._decode_explicit<ResultAttribute[]>(() => __utils._decodeSequenceOf<ResultAttribute>(() => _decode_ResultAttribute))(_el); },
        "defaultControls": (_el: asn1.ASN1Element): void => { defaultControls = __utils._decode_explicit<ControlOptions>(() => _decode_ControlOptions)(_el); },
        "mandatoryControls": (_el: asn1.ASN1Element): void => { mandatoryControls = __utils._decode_explicit<ControlOptions>(() => _decode_ControlOptions)(_el); },
        "searchRuleControls": (_el: asn1.ASN1Element): void => { searchRuleControls = __utils._decode_explicit<ControlOptions>(() => _decode_ControlOptions)(_el); },
        "familyGrouping": (_el: asn1.ASN1Element): void => { familyGrouping = __utils._decode_explicit<FamilyGrouping>(() => _decode_FamilyGrouping)(_el); },
        "familyReturn": (_el: asn1.ASN1Element): void => { familyReturn = __utils._decode_explicit<FamilyReturn>(() => _decode_FamilyReturn)(_el); },
        "relaxation": (_el: asn1.ASN1Element): void => { relaxation = __utils._decode_explicit<RelaxationPolicy>(() => _decode_RelaxationPolicy)(_el); },
        "additionalControl": (_el: asn1.ASN1Element): void => { additionalControl = __utils._decode_explicit<AttributeType[]>(() => __utils._decodeSequenceOf<AttributeType>(() => _decode_AttributeType))(_el); },
        "allowedSubset": (_el: asn1.ASN1Element): void => { allowedSubset = __utils._decode_explicit<AllowedSubset>(() => _decode_AllowedSubset)(_el); },
        "imposedSubset": (_el: asn1.ASN1Element): void => { imposedSubset = __utils._decode_explicit<ImposedSubset>(() => _decode_ImposedSubset)(_el); },
        "entryLimit": (_el: asn1.ASN1Element): void => { entryLimit = __utils._decode_explicit<EntryLimit>(() => _decode_EntryLimit)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchRule,
        _extension_additions_list_spec_for_SearchRule,
        _root_component_type_list_2_spec_for_SearchRule,
        undefined,
    );
    return new SearchRule( /* SEQUENCE_CONSTRUCTOR_CALL */
        id,
        dmdId,
        serviceType,
        userClass,
        inputAttributeTypes,
        attributeCombination,
        outputAttributeTypes,
        defaultControls,
        mandatoryControls,
        searchRuleControls,
        familyGrouping,
        familyReturn,
        relaxation,
        additionalControl,
        allowedSubset,
        imposedSubset,
        entryLimit
    );
};
export const _encode_SearchRule = function (value: SearchRule, elGetter: __utils.ASN1Encoder<SearchRule>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.id, __utils.BER),
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeObjectIdentifier, __utils.BER)(value.dmdId, __utils.BER),
            /* IF_ABSENT  */ ((value.serviceType === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeObjectIdentifier, __utils.BER)(value.serviceType, __utils.BER)),
            /* IF_ABSENT  */ ((value.userClass === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeInteger, __utils.BER)(value.userClass, __utils.BER)),
            /* IF_ABSENT  */ ((value.inputAttributeTypes === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeSequenceOf<RequestAttribute>(() => _encode_RequestAttribute, __utils.BER), __utils.BER)(value.inputAttributeTypes, __utils.BER)),
            /* IF_DEFAULT */ (value.attributeCombination === undefined || __utils.deepEq(value.attributeCombination, _default_value_for_SearchRule__attributeCombination) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_AttributeCombination, __utils.BER)(value.attributeCombination, __utils.BER)),
            /* IF_ABSENT  */ ((value.outputAttributeTypes === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeSequenceOf<ResultAttribute>(() => _encode_ResultAttribute, __utils.BER), __utils.BER)(value.outputAttributeTypes, __utils.BER)),
            /* IF_ABSENT  */ ((value.defaultControls === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 6, () => _encode_ControlOptions, __utils.BER)(value.defaultControls, __utils.BER)),
            /* IF_ABSENT  */ ((value.mandatoryControls === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 7, () => _encode_ControlOptions, __utils.BER)(value.mandatoryControls, __utils.BER)),
            /* IF_ABSENT  */ ((value.searchRuleControls === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 8, () => _encode_ControlOptions, __utils.BER)(value.searchRuleControls, __utils.BER)),
            /* IF_ABSENT  */ ((value.familyGrouping === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 9, () => _encode_FamilyGrouping, __utils.BER)(value.familyGrouping, __utils.BER)),
            /* IF_ABSENT  */ ((value.familyReturn === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 10, () => _encode_FamilyReturn, __utils.BER)(value.familyReturn, __utils.BER)),
            /* IF_ABSENT  */ ((value.relaxation === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 11, () => _encode_RelaxationPolicy, __utils.BER)(value.relaxation, __utils.BER)),
            /* IF_ABSENT  */ ((value.additionalControl === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 12, () => __utils._encodeSequenceOf<AttributeType>(() => _encode_AttributeType, __utils.BER), __utils.BER)(value.additionalControl, __utils.BER)),
            /* IF_DEFAULT */ (value.allowedSubset === undefined || __utils.deepEq(value.allowedSubset, _default_value_for_SearchRule__allowedSubset) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 13, () => _encode_AllowedSubset, __utils.BER)(value.allowedSubset, __utils.BER)),
            /* IF_ABSENT  */ ((value.imposedSubset === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 14, () => _encode_ImposedSubset, __utils.BER)(value.imposedSubset, __utils.BER)),
            /* IF_ABSENT  */ ((value.entryLimit === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 15, () => _encode_EntryLimit, __utils.BER)(value.entryLimit, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SearchRuleDescription {
    constructor (
        readonly id: asn1.INTEGER /* REPLICATED_COMPONENT */,
        readonly dmdId: asn1.OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        readonly serviceType: asn1.OBJECT_IDENTIFIER | undefined /* REPLICATED_COMPONENT */,
        readonly userClass: asn1.INTEGER | undefined /* REPLICATED_COMPONENT */,
        readonly inputAttributeTypes: RequestAttribute[] | undefined /* REPLICATED_COMPONENT */,
        readonly attributeCombination: AttributeCombination | undefined /* REPLICATED_COMPONENT */,
        readonly outputAttributeTypes: ResultAttribute[] | undefined /* REPLICATED_COMPONENT */,
        readonly defaultControls: ControlOptions | undefined /* REPLICATED_COMPONENT */,
        readonly mandatoryControls: ControlOptions | undefined /* REPLICATED_COMPONENT */,
        readonly searchRuleControls: ControlOptions | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping: FamilyGrouping | undefined /* REPLICATED_COMPONENT */,
        readonly familyReturn: FamilyReturn | undefined /* REPLICATED_COMPONENT */,
        readonly relaxation: RelaxationPolicy | undefined /* REPLICATED_COMPONENT */,
        readonly additionalControl: AttributeType[] | undefined /* REPLICATED_COMPONENT */,
        readonly allowedSubset: AllowedSubset | undefined /* REPLICATED_COMPONENT */,
        readonly imposedSubset: ImposedSubset | undefined /* REPLICATED_COMPONENT */,
        readonly entryLimit: EntryLimit | undefined /* REPLICATED_COMPONENT */,
        readonly name: DirectoryString[] | undefined,
        readonly description: DirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SearchRuleDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("dmdId", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("serviceType", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("userClass", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("inputAttributeTypes", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("attributeCombination", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("outputAttributeTypes", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("defaultControls", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("mandatoryControls", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("searchRuleControls", true, __utils.hasTag(asn1.ASN1TagClass.context, 8), undefined, undefined),
    /* FIXME: familyGrouping COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: familyReturn COULD_NOT_RESOLVE_TYPE_DEF */,
    new __utils.ComponentSpec("relaxation", true, __utils.hasTag(asn1.ASN1TagClass.context, 11), undefined, undefined),
    new __utils.ComponentSpec("additionalControl", true, __utils.hasTag(asn1.ASN1TagClass.context, 12), undefined, undefined),
    new __utils.ComponentSpec("allowedSubset", true, __utils.hasTag(asn1.ASN1TagClass.context, 13), undefined, undefined),
    new __utils.ComponentSpec("imposedSubset", true, __utils.hasTag(asn1.ASN1TagClass.context, 14), undefined, undefined),
    new __utils.ComponentSpec("entryLimit", true, __utils.hasTag(asn1.ASN1TagClass.context, 15), undefined, undefined),
    new __utils.ComponentSpec("name", true, __utils.hasTag(asn1.ASN1TagClass.context, 28), undefined, undefined),
    new __utils.ComponentSpec("description", true, __utils.hasTag(asn1.ASN1TagClass.context, 29), undefined, undefined),
    new __utils.ComponentSpec("obsolete", true, __utils.hasTag(asn1.ASN1TagClass.context, 30), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SearchRuleDescription: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SearchRuleDescription: __utils.ComponentSpec[] = [
    
];
export const _default_value_for_SearchRuleDescription__attributeCombination = /* COULD_NOT_COMPILE_DEFAULT_VALUE attributeCombination */;
export const _default_value_for_SearchRuleDescription__allowedSubset = new Uint8ClampedArray([ 1, 1, 1 ]);
export const _default_value_for_SearchRuleDescription__obsolete = false;
export const _decode_SearchRuleDescription = function (el: asn1.ASN1Element): SearchRuleDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let id!: asn1.INTEGER;
    let dmdId!: asn1.OBJECT_IDENTIFIER;
    let serviceType: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let userClass: asn1.OPTIONAL<asn1.INTEGER>;
    let inputAttributeTypes: asn1.OPTIONAL<RequestAttribute[]>;
    let attributeCombination: asn1.OPTIONAL<AttributeCombination> = _default_value_for_SearchRuleDescription__attributeCombination;
    let outputAttributeTypes: asn1.OPTIONAL<ResultAttribute[]>;
    let defaultControls: asn1.OPTIONAL<ControlOptions>;
    let mandatoryControls: asn1.OPTIONAL<ControlOptions>;
    let searchRuleControls: asn1.OPTIONAL<ControlOptions>;
    let familyGrouping: asn1.OPTIONAL<FamilyGrouping>;
    let familyReturn: asn1.OPTIONAL<FamilyReturn>;
    let relaxation: asn1.OPTIONAL<RelaxationPolicy>;
    let additionalControl: asn1.OPTIONAL<AttributeType[]>;
    let allowedSubset: asn1.OPTIONAL<AllowedSubset> = _default_value_for_SearchRuleDescription__allowedSubset;
    let imposedSubset: asn1.OPTIONAL<ImposedSubset>;
    let entryLimit: asn1.OPTIONAL<EntryLimit>;
    let name: asn1.OPTIONAL<DirectoryString[]>;
    let description: asn1.OPTIONAL<DirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_SearchRuleDescription__obsolete;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "id": (_el: asn1.ASN1Element): void => { id = __utils._decodeInteger(_el); },
        "dmdId": (_el: asn1.ASN1Element): void => { dmdId = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "serviceType": (_el: asn1.ASN1Element): void => { serviceType = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "userClass": (_el: asn1.ASN1Element): void => { userClass = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "inputAttributeTypes": (_el: asn1.ASN1Element): void => { inputAttributeTypes = __utils._decode_explicit<RequestAttribute[]>(() => __utils._decodeSequenceOf<RequestAttribute>(() => _decode_RequestAttribute))(_el); },
        "attributeCombination": (_el: asn1.ASN1Element): void => { attributeCombination = __utils._decode_explicit<AttributeCombination>(() => _decode_AttributeCombination)(_el); },
        "outputAttributeTypes": (_el: asn1.ASN1Element): void => { outputAttributeTypes = __utils._decode_explicit<ResultAttribute[]>(() => __utils._decodeSequenceOf<ResultAttribute>(() => _decode_ResultAttribute))(_el); },
        "defaultControls": (_el: asn1.ASN1Element): void => { defaultControls = __utils._decode_explicit<ControlOptions>(() => _decode_ControlOptions)(_el); },
        "mandatoryControls": (_el: asn1.ASN1Element): void => { mandatoryControls = __utils._decode_explicit<ControlOptions>(() => _decode_ControlOptions)(_el); },
        "searchRuleControls": (_el: asn1.ASN1Element): void => { searchRuleControls = __utils._decode_explicit<ControlOptions>(() => _decode_ControlOptions)(_el); },
        "familyGrouping": (_el: asn1.ASN1Element): void => { familyGrouping = __utils._decode_explicit<FamilyGrouping>(() => _decode_FamilyGrouping)(_el); },
        "familyReturn": (_el: asn1.ASN1Element): void => { familyReturn = __utils._decode_explicit<FamilyReturn>(() => _decode_FamilyReturn)(_el); },
        "relaxation": (_el: asn1.ASN1Element): void => { relaxation = __utils._decode_explicit<RelaxationPolicy>(() => _decode_RelaxationPolicy)(_el); },
        "additionalControl": (_el: asn1.ASN1Element): void => { additionalControl = __utils._decode_explicit<AttributeType[]>(() => __utils._decodeSequenceOf<AttributeType>(() => _decode_AttributeType))(_el); },
        "allowedSubset": (_el: asn1.ASN1Element): void => { allowedSubset = __utils._decode_explicit<AllowedSubset>(() => _decode_AllowedSubset)(_el); },
        "imposedSubset": (_el: asn1.ASN1Element): void => { imposedSubset = __utils._decode_explicit<ImposedSubset>(() => _decode_ImposedSubset)(_el); },
        "entryLimit": (_el: asn1.ASN1Element): void => { entryLimit = __utils._decode_explicit<EntryLimit>(() => _decode_EntryLimit)(_el); },
        "name": (_el: asn1.ASN1Element): void => { name = __utils._decode_explicit<DirectoryString[]>(() => __utils._decodeSetOf<DirectoryString>(() => _decode_DirectoryString))(_el); },
        "description": (_el: asn1.ASN1Element): void => { description = __utils._decode_explicit<DirectoryString>(() => _decode_DirectoryString)(_el); },
        "obsolete": (_el: asn1.ASN1Element): void => { obsolete = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchRuleDescription,
        _extension_additions_list_spec_for_SearchRuleDescription,
        _root_component_type_list_2_spec_for_SearchRuleDescription,
        undefined,
    );
    return new SearchRuleDescription( /* SEQUENCE_CONSTRUCTOR_CALL */
        id,
        dmdId,
        serviceType,
        userClass,
        inputAttributeTypes,
        attributeCombination,
        outputAttributeTypes,
        defaultControls,
        mandatoryControls,
        searchRuleControls,
        familyGrouping,
        familyReturn,
        relaxation,
        additionalControl,
        allowedSubset,
        imposedSubset,
        entryLimit,
        name,
        description,
        obsolete
    );
};
export const _encode_SearchRuleDescription = function (value: SearchRuleDescription, elGetter: __utils.ASN1Encoder<SearchRuleDescription>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.id, __utils.BER),
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeObjectIdentifier, __utils.BER)(value.dmdId, __utils.BER),
            /* IF_ABSENT  */ ((value.serviceType === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeObjectIdentifier, __utils.BER)(value.serviceType, __utils.BER)),
            /* IF_ABSENT  */ ((value.userClass === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeInteger, __utils.BER)(value.userClass, __utils.BER)),
            /* IF_ABSENT  */ ((value.inputAttributeTypes === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeSequenceOf<RequestAttribute>(() => _encode_RequestAttribute, __utils.BER), __utils.BER)(value.inputAttributeTypes, __utils.BER)),
            /* IF_DEFAULT */ (value.attributeCombination === undefined || __utils.deepEq(value.attributeCombination, _default_value_for_SearchRuleDescription__attributeCombination) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_AttributeCombination, __utils.BER)(value.attributeCombination, __utils.BER)),
            /* IF_ABSENT  */ ((value.outputAttributeTypes === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeSequenceOf<ResultAttribute>(() => _encode_ResultAttribute, __utils.BER), __utils.BER)(value.outputAttributeTypes, __utils.BER)),
            /* IF_ABSENT  */ ((value.defaultControls === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 6, () => _encode_ControlOptions, __utils.BER)(value.defaultControls, __utils.BER)),
            /* IF_ABSENT  */ ((value.mandatoryControls === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 7, () => _encode_ControlOptions, __utils.BER)(value.mandatoryControls, __utils.BER)),
            /* IF_ABSENT  */ ((value.searchRuleControls === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 8, () => _encode_ControlOptions, __utils.BER)(value.searchRuleControls, __utils.BER)),
            /* IF_ABSENT  */ ((value.familyGrouping === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 9, () => _encode_FamilyGrouping, __utils.BER)(value.familyGrouping, __utils.BER)),
            /* IF_ABSENT  */ ((value.familyReturn === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 10, () => _encode_FamilyReturn, __utils.BER)(value.familyReturn, __utils.BER)),
            /* IF_ABSENT  */ ((value.relaxation === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 11, () => _encode_RelaxationPolicy, __utils.BER)(value.relaxation, __utils.BER)),
            /* IF_ABSENT  */ ((value.additionalControl === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 12, () => __utils._encodeSequenceOf<AttributeType>(() => _encode_AttributeType, __utils.BER), __utils.BER)(value.additionalControl, __utils.BER)),
            /* IF_DEFAULT */ (value.allowedSubset === undefined || __utils.deepEq(value.allowedSubset, _default_value_for_SearchRuleDescription__allowedSubset) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 13, () => _encode_AllowedSubset, __utils.BER)(value.allowedSubset, __utils.BER)),
            /* IF_ABSENT  */ ((value.imposedSubset === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 14, () => _encode_ImposedSubset, __utils.BER)(value.imposedSubset, __utils.BER)),
            /* IF_ABSENT  */ ((value.entryLimit === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 15, () => _encode_EntryLimit, __utils.BER)(value.entryLimit, __utils.BER)),
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 28, () => __utils._encodeSetOf<DirectoryString>(() => _encode_DirectoryString, __utils.BER), __utils.BER)(value.name, __utils.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 29, () => _encode_DirectoryString, __utils.BER)(value.description, __utils.BER)),
            /* IF_DEFAULT */ (value.obsolete === undefined || __utils.deepEq(value.obsolete, _default_value_for_SearchRuleDescription__obsolete) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 30, () => __utils._encodeBoolean, __utils.BER)(value.obsolete, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: hierarchyLevel

// TODO: ObjectAssignment: hierarchyBelow

// TODO: ObjectAssignment: hierarchyParent

export class SearchRuleId {
    constructor (
        readonly id: asn1.INTEGER,
        readonly dmdId: asn1.OBJECT_IDENTIFIER
    ) {}
}
export const _root_component_type_list_1_spec_for_SearchRuleId: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("dmdId", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SearchRuleId: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SearchRuleId: __utils.ComponentSpec[] = [
    
];

export const _decode_SearchRuleId = function (el: asn1.ASN1Element): SearchRuleId {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SearchRuleId contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "id";
    sequence[1].name = "dmdId";
    let id!: asn1.INTEGER;
    let dmdId!: asn1.OBJECT_IDENTIFIER;
    id = __utils._decodeInteger(sequence[0]);
    dmdId = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(sequence[1]);
    // TODO: Validate values.
    return new SearchRuleId(
        id,
        dmdId,

    );
};
export const _encode_SearchRuleId = function (value: SearchRuleId, elGetter: __utils.ASN1Encoder<SearchRuleId>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.id, __utils.BER),
            /* REQUIRED   */ __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeObjectIdentifier, __utils.BER)(value.dmdId, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: SupportedMatchingRestrictions

// TODO: ObjectClassAssignment: REQUEST-ATTRIBUTE

export type OutputValues =
    { selectedValues: asn1.ASN1Element[] }
    | { matchedValuesOnly: asn1.NULL };
export const _decode_OutputValues = __utils._decode_inextensible_choice<OutputValues>({
    "UNIVERSAL 16": [ "selectedValues", __utils._decodeSequenceOf<asn1.ASN1Element>(() => __utils._decodeAny) ],
    "UNIVERSAL 5": [ "matchedValuesOnly", __utils._decodeNull ]
});
export const _encode_OutputValues = __utils._encode_choice<OutputValues>({
    "selectedValues": __utils._encodeSequenceOf<asn1.ASN1Element>(() => __utils._encodeAny, __utils.BER),
    "matchedValuesOnly": __utils._encodeNull,
}, __utils.BER);


// TODO: ObjectClassAssignment: RESULT-ATTRIBUTE

// TODO: ObjectClassAssignment: SEARCH-RULE

// TODO: ObjectClassAssignment: MATCHING-RESTRICTION

export const id_oc_top: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_oc);

export const id_oc_alias: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_oc);

export const id_oc_parent: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    28,
], id_oc);

export const id_oc_child: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    29,
], id_oc);

export const id_at_objectClass: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_at);

export const id_at_aliasedEntryName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_at);

export const id_mr_objectIdentifierMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_mr);

export const id_mr_distinguishedNameMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_mr);

export const id_oa_excludeAllCollectiveAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_oa);

export const id_oa_createTimestamp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_oa);

export const id_oa_modifyTimestamp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_oa);

export const id_oa_creatorsName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_oa);

export const id_oa_modifiersName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_oa);

export const id_oa_administrativeRole: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_oa);

export const id_oa_subtreeSpecification: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_oa);

export const id_oa_collectiveExclusions: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_oa);

export const id_oa_subschemaTimestamp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_oa);

export const id_oa_hasSubordinates: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_oa);

export const id_oa_subschemaSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_oa);

export const id_oa_accessControlSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_oa);

export const id_oa_collectiveAttributeSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
], id_oa);

export const id_oa_contextDefaultSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
], id_oa);

export const id_oa_contextAssertionDefault: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
], id_oa);

export const id_oa_serviceAdminSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
], id_oa);

export const id_oa_searchRules: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
], id_oa);

export const id_oa_hierarchyLevel: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
], id_oa);

export const id_oa_hierarchyBelow: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
], id_oa);

export const id_oa_hierarchyParent: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
], id_oa);

export const id_sc_subentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_sc);

export const id_sc_accessControlSubentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_sc);

export const id_sc_collectiveAttributeSubentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_sc);

export const id_sc_contextAssertionSubentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_sc);

export const id_sc_serviceAdminSubentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_sc);

export const id_nf_subentryNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
], id_nf);

export const id_ar_autonomousArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_ar);

export const id_ar_accessControlSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_ar);

export const id_ar_accessControlInnerArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_ar);

export const id_ar_subschemaAdminSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_ar);

export const id_ar_collectiveAttributeSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_ar);

export const id_ar_collectiveAttributeInnerArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_ar);

export const id_ar_contextDefaultSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_ar);

export const id_ar_serviceSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_ar);

// TODO: ObjectClassAssignment: STRUCTURE-RULE

/* END_MODULE InformationFramework */
