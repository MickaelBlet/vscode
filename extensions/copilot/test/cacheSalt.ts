/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// These values are used as input for computing sha256 hashes for caching.
// Bump them to regenerate new cache entries or when the cache object shape changes.

/**
 * Used for all ChatML requests (all models).
 */
export const CHAT_ML_CACHE_SALT_PER_MODEL: Record<string, string> = {
	'DEFAULT': '2026-04-28T00:00:00Z',
	'copilot-nes-oct': '2026-02-10T12:14:18.526Z',
};

/**
 * Used for all diagnostics providers.
 */
export const CACHING_DIAGNOSTICS_PROVIDER_CACHE_SALT = 4;

/**
 * Used by the TS diagnostics provider.
 */
export const TS_SERVER_DIAGNOSTICS_PROVIDER_CACHE_SALT = 5;

/**
 * Used by `isValidPythonFile`.
 */
export const PYTHON_VALID_SYNTAX_CACHE_SALT = 2;
