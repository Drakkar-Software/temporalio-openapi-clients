/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ListSearchAttributesResponse = {
    /**
     * Mapping between custom (user-registered) search attribute name to its IndexedValueType.
     */
    customAttributes?: Record<string, 'INDEXED_VALUE_TYPE_UNSPECIFIED' | 'INDEXED_VALUE_TYPE_TEXT' | 'INDEXED_VALUE_TYPE_KEYWORD' | 'INDEXED_VALUE_TYPE_INT' | 'INDEXED_VALUE_TYPE_DOUBLE' | 'INDEXED_VALUE_TYPE_BOOL' | 'INDEXED_VALUE_TYPE_DATETIME' | 'INDEXED_VALUE_TYPE_KEYWORD_LIST'>;
    /**
     * Mapping between system (predefined) search attribute name to its IndexedValueType.
     */
    systemAttributes?: Record<string, 'INDEXED_VALUE_TYPE_UNSPECIFIED' | 'INDEXED_VALUE_TYPE_TEXT' | 'INDEXED_VALUE_TYPE_KEYWORD' | 'INDEXED_VALUE_TYPE_INT' | 'INDEXED_VALUE_TYPE_DOUBLE' | 'INDEXED_VALUE_TYPE_BOOL' | 'INDEXED_VALUE_TYPE_DATETIME' | 'INDEXED_VALUE_TYPE_KEYWORD_LIST'>;
    /**
     * Mapping from the attribute name to the visibility storage native type.
     */
    storageSchema?: Record<string, string>;
};

