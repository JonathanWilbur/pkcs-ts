/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    PrintableString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmInfo,
    _decode_AlgorithmInfo,
    _encode_AlgorithmInfo,
} from "../PKCS-15/AlgorithmInfo.ta";
import { Label, _decode_Label, _encode_Label } from "../PKCS-15/Label.ta";
import {
    LastUpdate,
    _decode_LastUpdate,
    _encode_LastUpdate,
} from "../PKCS-15/LastUpdate.ta";
import {
    RecordInfo,
    _decode_RecordInfo,
    _encode_RecordInfo,
} from "../PKCS-15/RecordInfo.ta";
import {
    SecurityEnvironmentInfo,
    _decode_SecurityEnvironmentInfo,
    _encode_SecurityEnvironmentInfo,
} from "../PKCS-15/SecurityEnvironmentInfo.ta";
import {
    TokenFlags,
    _decode_TokenFlags,
    _encode_TokenFlags,
} from "../PKCS-15/TokenFlags.ta";
import {
    TokenInfo_version,
    _decode_TokenInfo_version,
    _encode_TokenInfo_version,
} from "../PKCS-15/TokenInfo-version.ta";
export {
    AlgorithmInfo,
    _decode_AlgorithmInfo,
    _encode_AlgorithmInfo,
} from "../PKCS-15/AlgorithmInfo.ta";
export { Label, _decode_Label, _encode_Label } from "../PKCS-15/Label.ta";
export {
    LastUpdate,
    _decode_LastUpdate,
    _encode_LastUpdate,
} from "../PKCS-15/LastUpdate.ta";
export {
    RecordInfo,
    _decode_RecordInfo,
    _encode_RecordInfo,
} from "../PKCS-15/RecordInfo.ta";
export {
    SecurityEnvironmentInfo,
    _decode_SecurityEnvironmentInfo,
    _encode_SecurityEnvironmentInfo,
} from "../PKCS-15/SecurityEnvironmentInfo.ta";
export {
    eidCompliant /* IMPORTED_SHORT_NAMED_BIT */,
    loginRequired /* IMPORTED_SHORT_NAMED_BIT */,
    prnGeneration /* IMPORTED_SHORT_NAMED_BIT */,
    readonly /* IMPORTED_SHORT_NAMED_BIT */,
    TokenFlags,
    TokenFlags_eidCompliant /* IMPORTED_LONG_NAMED_BIT */,
    TokenFlags_loginRequired /* IMPORTED_LONG_NAMED_BIT */,
    TokenFlags_prnGeneration /* IMPORTED_LONG_NAMED_BIT */,
    TokenFlags_readonly /* IMPORTED_LONG_NAMED_BIT */,
    _decode_TokenFlags,
    _encode_TokenFlags,
} from "../PKCS-15/TokenFlags.ta";
export {
    TokenInfo_version,
    TokenInfo_version_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TokenInfo_version,
    _encode_TokenInfo_version,
} from "../PKCS-15/TokenInfo-version.ta";

/* START_OF_SYMBOL_DEFINITION TokenInfo */
/**
 * @summary TokenInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenInfo ::= SEQUENCE {
 *     version INTEGER {v1(0)} (v1,...),
 *     serialNumber OCTET STRING,
 *     manufacturerID Label OPTIONAL,
 *     label [0] Label OPTIONAL,
 *     tokenflags TokenFlags,
 *     seInfo SEQUENCE OF SecurityEnvironmentInfo OPTIONAL,
 *     recordInfo [1] RecordInfo OPTIONAL,
 *     supportedAlgorithms [2] SEQUENCE OF AlgorithmInfo OPTIONAL,
 *     ...,
 *     issuerId [3] Label OPTIONAL,
 *     holderId [4] Label OPTIONAL,
 *     lastUpdate [5] LastUpdate OPTIONAL,
 *     preferredLanguage PrintableString OPTIONAL -- In accordance with IETF RFC 1766
 * } (CONSTRAINED BY { -- Each AlgorithmInfo.reference value must be unique -- })
 * ```
 *
 * @class
 */
export class TokenInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: TokenInfo_version,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OCTET_STRING,
        /**
         * @summary `manufacturerID`.
         * @public
         * @readonly
         */
        readonly manufacturerID: OPTIONAL<Label>,
        /**
         * @summary `label`.
         * @public
         * @readonly
         */
        readonly label: OPTIONAL<Label>,
        /**
         * @summary `tokenflags`.
         * @public
         * @readonly
         */
        readonly tokenflags: TokenFlags,
        /**
         * @summary `seInfo`.
         * @public
         * @readonly
         */
        readonly seInfo: OPTIONAL<SecurityEnvironmentInfo[]>,
        /**
         * @summary `recordInfo`.
         * @public
         * @readonly
         */
        readonly recordInfo: OPTIONAL<RecordInfo>,
        /**
         * @summary `supportedAlgorithms`.
         * @public
         * @readonly
         */
        readonly supportedAlgorithms: OPTIONAL<AlgorithmInfo[]>,
        /**
         * @summary `issuerId`.
         * @public
         * @readonly
         */
        readonly issuerId: OPTIONAL<Label>,
        /**
         * @summary `holderId`.
         * @public
         * @readonly
         */
        readonly holderId: OPTIONAL<Label>,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<LastUpdate>,
        /**
         * @summary `preferredLanguage`.
         * @public
         * @readonly
         */
        readonly preferredLanguage: OPTIONAL<PrintableString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TokenInfo
     * @description
     *
     * This takes an `object` and converts it to a `TokenInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TokenInfo`.
     * @returns {TokenInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TokenInfo]: TokenInfo[_K] }
    ): TokenInfo {
        return new TokenInfo(
            _o.version,
            _o.serialNumber,
            _o.manufacturerID,
            _o.label,
            _o.tokenflags,
            _o.seInfo,
            _o.recordInfo,
            _o.supportedAlgorithms,
            _o.issuerId,
            _o.holderId,
            _o.lastUpdate,
            _o.preferredLanguage,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TokenInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TokenInfo */
/**
 * @summary The Leading Root Component Types of TokenInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TokenInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "manufacturerID",
        true,
        $.hasTag(_TagClass.universal, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "label",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "tokenflags",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seInfo",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "recordInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "supportedAlgorithms",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TokenInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TokenInfo */
/**
 * @summary The Trailing Root Component Types of TokenInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TokenInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TokenInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TokenInfo */
/**
 * @summary The Extension Addition Component Types of TokenInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TokenInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuerId",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "holderId",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "preferredLanguage",
        true,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TokenInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenInfo */
let _cached_decoder_for_TokenInfo: $.ASN1Decoder<TokenInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TokenInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) TokenInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenInfo} The decoded data structure.
 */
export function _decode_TokenInfo(el: _Element) {
    if (!_cached_decoder_for_TokenInfo) {
        _cached_decoder_for_TokenInfo = function (el: _Element): TokenInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: TokenInfo_version;
            let serialNumber!: OCTET_STRING;
            let manufacturerID: OPTIONAL<Label>;
            let label: OPTIONAL<Label>;
            let tokenflags!: TokenFlags;
            let seInfo: OPTIONAL<SecurityEnvironmentInfo[]>;
            let recordInfo: OPTIONAL<RecordInfo>;
            let supportedAlgorithms: OPTIONAL<AlgorithmInfo[]>;
            let issuerId: OPTIONAL<Label>;
            let holderId: OPTIONAL<Label>;
            let lastUpdate: OPTIONAL<LastUpdate>;
            let preferredLanguage: OPTIONAL<PrintableString>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_TokenInfo_version(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = $._decodeOctetString(_el);
                },
                manufacturerID: (_el: _Element): void => {
                    manufacturerID = _decode_Label(_el);
                },
                label: (_el: _Element): void => {
                    label = $._decode_implicit<Label>(() => _decode_Label)(_el);
                },
                tokenflags: (_el: _Element): void => {
                    tokenflags = _decode_TokenFlags(_el);
                },
                seInfo: (_el: _Element): void => {
                    seInfo = $._decodeSequenceOf<SecurityEnvironmentInfo>(
                        () => _decode_SecurityEnvironmentInfo
                    )(_el);
                },
                recordInfo: (_el: _Element): void => {
                    recordInfo = $._decode_implicit<RecordInfo>(
                        () => _decode_RecordInfo
                    )(_el);
                },
                supportedAlgorithms: (_el: _Element): void => {
                    supportedAlgorithms = $._decode_implicit<AlgorithmInfo[]>(
                        () =>
                            $._decodeSequenceOf<AlgorithmInfo>(
                                () => _decode_AlgorithmInfo
                            )
                    )(_el);
                },
                issuerId: (_el: _Element): void => {
                    issuerId = $._decode_implicit<Label>(() => _decode_Label)(
                        _el
                    );
                },
                holderId: (_el: _Element): void => {
                    holderId = $._decode_implicit<Label>(() => _decode_Label)(
                        _el
                    );
                },
                lastUpdate: (_el: _Element): void => {
                    lastUpdate = $._decode_explicit<LastUpdate>(
                        () => _decode_LastUpdate
                    )(_el);
                },
                preferredLanguage: (_el: _Element): void => {
                    preferredLanguage = $._decodePrintableString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TokenInfo,
                _extension_additions_list_spec_for_TokenInfo,
                _root_component_type_list_2_spec_for_TokenInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TokenInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                serialNumber,
                manufacturerID,
                label,
                tokenflags,
                seInfo,
                recordInfo,
                supportedAlgorithms,
                issuerId,
                holderId,
                lastUpdate,
                preferredLanguage,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TokenInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TokenInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenInfo */
let _cached_encoder_for_TokenInfo: $.ASN1Encoder<TokenInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TokenInfo */
/**
 * @summary Encodes a(n) TokenInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenInfo, encoded as an ASN.1 Element.
 */
export function _encode_TokenInfo(
    value: TokenInfo,
    elGetter: $.ASN1Encoder<TokenInfo>
) {
    if (!_cached_encoder_for_TokenInfo) {
        _cached_encoder_for_TokenInfo = function (
            value: TokenInfo,
            elGetter: $.ASN1Encoder<TokenInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TokenInfo_version(
                                value.version,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.serialNumber,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.manufacturerID === undefined
                                ? undefined
                                : _encode_Label(value.manufacturerID, $.BER),
                            /* IF_ABSENT  */ value.label === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Label,
                                      $.BER
                                  )(value.label, $.BER),
                            /* REQUIRED   */ _encode_TokenFlags(
                                value.tokenflags,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.seInfo === undefined
                                ? undefined
                                : $._encodeSequenceOf<SecurityEnvironmentInfo>(
                                      () => _encode_SecurityEnvironmentInfo,
                                      $.BER
                                  )(value.seInfo, $.BER),
                            /* IF_ABSENT  */ value.recordInfo === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_RecordInfo,
                                      $.BER
                                  )(value.recordInfo, $.BER),
                            /* IF_ABSENT  */ value.supportedAlgorithms ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSequenceOf<AlgorithmInfo>(
                                              () => _encode_AlgorithmInfo,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.supportedAlgorithms, $.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.issuerId === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Label,
                                      $.BER
                                  )(value.issuerId, $.BER),
                            /* IF_ABSENT  */ value.holderId === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_Label,
                                      $.BER
                                  )(value.holderId, $.BER),
                            /* IF_ABSENT  */ value.lastUpdate === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_LastUpdate,
                                      $.BER
                                  )(value.lastUpdate, $.BER),
                            /* IF_ABSENT  */ value.preferredLanguage ===
                            undefined
                                ? undefined
                                : $._encodePrintableString(
                                      value.preferredLanguage,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TokenInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TokenInfo */

/* eslint-enable */
