const DEFAULT_STRIPE_VERSION = "2025-03-31.basil";
const DEFAULT_INIT_BODY = "browser_locale=zh-CN&browser_timezone=Asia%2FShanghai&elements_session_client[elements_init_source]=custom_checkout&elements_session_client[referrer_host]=chatgpt.com&elements_session_client[locale]=zh-CN&elements_session_client[is_aggregation_expected]=false";
const DEFAULT_JS_VERSION = "5412f474d5";

const DEFAULT_PROFILE = {
  country: "US",
  line1: "38 Pearl Avenue",
  city: "Louisville",
  state: "MS",
  postal: "39339",
};

const DEFAULT_APATA_REPLAY_PAYLOAD = {
  threeDSServerTransID: "",
  computedValue: "fe6bb777f67d4a43e5feaf131b8cff00",
  possessionDeviceId: "afddf6a4c1bbde7f828551691d199f807e1ed6ec6a713b735ab40e6b203b22fef185262373d497142ef871a22666cdf4010fbdf9491731b3cef6fd8e9f041722",
  fingerprint: {
    navigator: {
      cookieEnabled: true,
      hardwareConcurrency: 8,
      language: "zh-CN",
      languages: "zh-CN, en, en-US",
      maxTouchPoints: 0,
      onLine: true,
      platform: "Win32",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
      vendor: "Google Inc.",
      deviceMemory: 8,
    },
    screen: {
      availHeight: 1080,
      availWidth: 1920,
      colorDepth: 24,
      height: 1080,
      width: 1920,
      pixelDepth: 24,
      orientation: "landscape-primary",
      devicePixelRatio: 1,
    },
    timezone: {
      offset: -480,
      timezone: "Asia/Shanghai",
    },
    adblock: false,
  },
};

const APATA_DEVICE_PROFILE_TTL_MS = 12 * 60 * 60 * 1000;
const APATA_UA_PROFILES = [
  {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
    platform: "Win32",
    language: "zh-CN",
    languages: "zh-CN, en, en-US",
    vendor: "Google Inc.",
  },
  {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
    platform: "MacIntel",
    language: "en-US",
    languages: "en-US, en",
    vendor: "Google Inc.",
  },
  {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:146.0) Gecko/20100101 Firefox/146.0",
    platform: "Win32",
    language: "en-US",
    languages: "en-US, en",
    vendor: "",
  },
];
const APATA_REGIONAL_PROFILES = [
  { timezone: "Asia/Shanghai", timezoneOffset: -480, language: "zh-CN" },
  { timezone: "America/New_York", timezoneOffset: 300, language: "en-US" },
  { timezone: "Europe/London", timezoneOffset: 0, language: "en-GB" },
];
const APATA_SCREEN_PROFILES = [
  { width: 1920, height: 1080, colorDepth: 24, pixelDepth: 24, devicePixelRatio: 1, orientation: "landscape-primary" },
  { width: 1536, height: 864, colorDepth: 24, pixelDepth: 24, devicePixelRatio: 1.25, orientation: "landscape-primary" },
  { width: 1440, height: 900, colorDepth: 24, pixelDepth: 24, devicePixelRatio: 2, orientation: "landscape-primary" },
];
const APATA_PERMISSION_STATES = ["prompt", "denied", "granted"];
const APATA_METHOD_FORM_ACTION_REGEXP_1 = /<form[^>]*\bid\s*=\s*['"]threeDSMethodForm['"][^>]*\baction\s*=\s*['"]([^"']+)['"][^>]*>/is;
const APATA_METHOD_FORM_ACTION_REGEXP_2 = /<form[^>]*\baction\s*=\s*['"]([^"']+)['"][^>]*\bid\s*=\s*['"]threeDSMethodForm['"][^>]*>/is;
const APATA_METHOD_DATA_INPUT_REGEXP_1 = /<input[^>]*\bname\s*=\s*['"]threeDSMethodData['"][^>]*\bvalue\s*=\s*['"]([^"']+)['"][^>]*>/is;
const APATA_METHOD_DATA_INPUT_REGEXP_2 = /<input[^>]*\bvalue\s*=\s*['"]([^"']+)['"][^>]*\bname\s*=\s*['"]threeDSMethodData['"][^>]*>/is;
const APATA_SERVER_TRANS_ID_DIV_REGEXP = /<div[^>]*\bid\s*=\s*['"]threeDSServerTransID['"][^>]*>(.*?)<\/div>/is;
const APATA_SERVER_TRANS_ID_SCRIPT_REGEXP = /threeDSServerTransID\s*=\s*['"]([0-9a-fA-F-]{8,})['"]/i;
const APATA_RECORD_URL_REGEXP = /(https?:\/\/[^"'\s]+\/v1\/RecordBrowserInfo)/i;
const APATA_TRAMPOLINE_PAYLOAD_REGEXP = /<script[^>]*\bid\s*=\s*['"]trampoline-payload['"][^>]*>(.*?)<\/script>/is;
const APATA_RBA_PROFILE_CALL_REGEXP = /rba\.profile\(\s*['"]([^"']+)['"]\s*,\s*['"]([^"']+)['"]\s*,\s*['"]([0-9a-fA-F-]{8,})['"]\s*\)/i;
const APATA_RBA_SESSION_ID_REGEXP = /(?:[?&]session_id=)([0-9a-fA-F-]{8,})/i;
const APATA_RBA_ORG_ID_REGEXP = /(?:[?&]org_id=)([a-zA-Z0-9_-]{4,})/i;
const APATA_FP_PLUGIN_NAMES = ["Chrome PDF Plugin", "Chrome PDF Viewer", "Native Client", "Widevine Content Decryption Module"];
const APATA_FP_PERMISSION_NAMES = ["accelerometer", "background-sync", "camera", "clipboard-read", "clipboard-write", "geolocation", "microphone", "notifications", "payment-handler", "persistent-storage"];
const APATA_FP_INSTALLED_FONTS = ["Arial", "Calibri", "Courier New", "Segoe UI", "Times New Roman"];
const APATA_FP_NOT_INSTALLED_FONTS = ["Helvetica Neue", "Menlo", "Monaco"];
const THREE_DS_DISABLED_MESSAGE = "存在3ds验证，系统已支持，但管理员策略禁止普通用户使用。";

let apataDeviceProfileCache = new Map();

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      if (request.method === "OPTIONS") {
        return withCORS(new Response(null, { status: 204 }), env);
      }
      if (url.pathname === "/health") {
        return jsonResponse({ success: true, data: { status: "ok" } }, 200, env);
      }
      if (url.pathname !== "/api/v1/bind-card") {
        return jsonResponse({ success: false, error: "not found" }, 404, env);
      }
      if (request.method !== "POST") {
        return jsonResponse({ success: false, error: "method not allowed" }, 405, env);
      }

      const authError = checkAuth(request, env);
      if (authError) {
        return jsonResponse({ success: false, error: authError }, 401, env);
      }

      try {
        const payload = await request.json();
        const input = normalizeBindRequest(payload);
        const client = new StripeSessionClient();
        const result = await runStripeBindFlow(client, input.checkoutSessionId, input.publishableKey, input.card, input.profile, env);

        return jsonResponse(
          {
            success: true,
            data: {
              checkout_session_id: input.checkoutSessionId,
              result: {
                payment_status: result.paymentStatus,
                checkout_status: result.checkoutStatus,
                setup_intent_status: result.setupIntent,
                payment_intent_status: result.paymentIntent,
                submission_attempt_state: result.submissionState,
                next_action_type: result.nextActionType,
                failure_reason: result.failureReason,
              },
            },
          },
          200,
          env,
        );
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        const isBadRequest = err instanceof SyntaxError || /格式|不能为空|不正确|必须|参数|invalid|stripe http 4\d\d|card_declined|decline_code|requires_action/i.test(message);
        const status = isBadRequest ? 400 : 500;
        return jsonResponse({ success: false, error: trimMessage(message) }, status, env);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      const isBadRequest = err instanceof SyntaxError || /格式|不能为空|不正确|必须|参数|invalid|stripe http 4\d\d|card_declined|decline_code|requires_action/i.test(message);
      const status = isBadRequest ? 400 : 500;
      return jsonResponse({ success: false, error: trimMessage(message) }, status, env);
    }
  },
};

function checkAuth(request, env) {
  const token = clean(env && env.API_TOKEN);
  if (!token) return "";
  const authHeader = clean(request.headers.get("authorization"));
  const apiKey = clean(request.headers.get("x-api-key"));
  const bearer = authHeader.toLowerCase().startsWith("bearer ") ? authHeader.slice(7).trim() : "";
  if (token === apiKey || token === bearer) return "";
  return "unauthorized";
}

function toBoolean(raw) {
  if (raw === true || raw === 1) return true;
  const normalized = clean(raw).toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "on";
}

function withCORS(response, env) {
  const out = new Response(response.body, response);
  const allowOrigin = clean(env && env.ALLOWED_ORIGIN) || "*";
  out.headers.set("Access-Control-Allow-Origin", allowOrigin);
  out.headers.set("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  out.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-API-Key, X-Admin-Password");
  out.headers.set("Vary", "Origin");
  return out;
}

function jsonResponse(payload, status, env) {
  return withCORS(
    new Response(JSON.stringify(payload), {
      status,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }),
    env,
  );
}

function normalizeBindRequest(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("请求参数格式错误");
  }
  const checkoutSessionId = clean(payload.checkout_session_id || payload.checkoutSessionId || payload.cs);
  const publishableKey = clean(payload.publishable_key || payload.publishableKey || payload.pk);
  if (!checkoutSessionId) throw new Error("checkout_session_id 不能为空");
  if (!publishableKey) throw new Error("publishable_key 不能为空");
  return {
    checkoutSessionId,
    publishableKey,
    card: normalizeCard(payload.card || {}),
    profile: normalizeProfile(payload.profile || payload.address || {}),
  };
}

function normalizeCard(raw) {
  const number = onlyDigits(raw.number);
  const cvc = onlyDigits(raw.cvc);
  let month = onlyDigits(raw.exp_month || raw.expMonth);
  let year = onlyDigits(raw.exp_year || raw.expYear);
  if (number.length < 12) throw new Error("卡号格式不正确");
  if (month.length === 1) month = `0${month}`;
  if (month.length !== 2) throw new Error("有效期月份格式不正确");
  const monthInt = Number(month);
  if (!Number.isFinite(monthInt) || monthInt < 1 || monthInt > 12) throw new Error("有效期月份必须在 01-12");
  if (year.length === 4) year = year.slice(2);
  if (year.length !== 2) throw new Error("有效期年份格式不正确");
  if (cvc.length < 3) throw new Error("CVC 格式不正确");
  return { number, expMonth: month, expYear: year, cvc };
}

function normalizeProfile(raw) {
  const country = clean(raw.country || DEFAULT_PROFILE.country).toUpperCase() || DEFAULT_PROFILE.country;
  return {
    name: clean(raw.name),
    email: clean(raw.email),
    country,
    line1: clean(raw.line1 || DEFAULT_PROFILE.line1),
    city: clean(raw.city || DEFAULT_PROFILE.city),
    state: clean(raw.state || DEFAULT_PROFILE.state),
    postal: clean(raw.postal || raw.postal_code || DEFAULT_PROFILE.postal),
  };
}

async function runStripeBindFlow(client, checkoutSessionId, publishableKey, card, profile, env) {
  const clientSessionID = randomID("csn");
  const initBody = new URLSearchParams(DEFAULT_INIT_BODY);
  const initJSON = await stripeRequest(client, "POST", `/v1/payment_pages/${encodeURIComponent(checkoutSessionId)}/init`, {
    bodyValues: initBody,
    publishableKey,
  });
  const initAmountText = readTotal(initJSON);
  if (initAmountText && !amountIsZero(initAmountText)) {
    throw new Error(`不是0元账单: total_summary.total=${initAmountText}`);
  }

  const mode = clean(initJSON.mode).toLowerCase();
  const seededElementsSessionID = randomID("elements");
  const initChecksum = valueString(initJSON.init_checksum);
  const checkoutConfigID = valueString(initJSON.config_id);
  const currency = firstNonEmpty(valueString(initJSON.currency), "usd");
  const expectedAmount = firstNonEmpty(
    valueString(initJSON?.total_summary?.due),
    valueString(initJSON?.total_summary?.total),
    "0",
  );

  let elementsJSON;
  if (mode === "setup") {
    const setupIntentClientSecret = valueString(initJSON?.setup_intent?.client_secret);
    if (!setupIntentClientSecret) {
      throw new Error("setup 模式缺少 setup_intent.client_secret");
    }
    const elementsQuery = new URLSearchParams();
    elementsQuery.set("type", "setup_intent");
    elementsQuery.set("client_secret", setupIntentClientSecret);
    elementsQuery.set("currency", currency);
    elementsQuery.set("elements_init_source", "custom_checkout");
    elementsQuery.set("referrer_host", "chatgpt.com");
    elementsQuery.set("stripe_js_id", clientSessionID);
    elementsQuery.set("locale", "zh");
    elementsJSON = await stripeRequest(client, "GET", "/v1/elements/sessions", {
      queryValues: elementsQuery,
      publishableKey,
    });
  } else {
    const taxBody = new URLSearchParams();
    taxBody.set("tax_region[country]", firstNonEmpty(profile.country, DEFAULT_PROFILE.country));
    taxBody.set("tax_region[line1]", firstNonEmpty(profile.line1, DEFAULT_PROFILE.line1));
    taxBody.set("tax_region[city]", firstNonEmpty(profile.city, DEFAULT_PROFILE.city));
    taxBody.set("tax_region[postal_code]", firstNonEmpty(profile.postal, DEFAULT_PROFILE.postal));
    taxBody.set("tax_region[state]", firstNonEmpty(profile.state, DEFAULT_PROFILE.state));
    taxBody.set("elements_session_client[elements_init_source]", "custom_checkout");
    taxBody.set("elements_session_client[referrer_host]", "chatgpt.com");
    taxBody.set("elements_session_client[session_id]", seededElementsSessionID);
    taxBody.set("elements_session_client[stripe_js_id]", clientSessionID);
    taxBody.set("elements_session_client[locale]", "zh");
    taxBody.set("elements_session_client[is_aggregation_expected]", "false");
    taxBody.set("client_attribution_metadata[merchant_integration_additional_elements][0]", "payment");
    taxBody.set("client_attribution_metadata[merchant_integration_additional_elements][1]", "address");
    const taxJSON = await stripeRequest(client, "POST", `/v1/payment_pages/${encodeURIComponent(checkoutSessionId)}`, {
      bodyValues: taxBody,
      publishableKey,
    });

    const elementsQuery = new URLSearchParams();
    elementsQuery.set("deferred_intent[mode]", "subscription");
    elementsQuery.set("deferred_intent[amount]", expectedAmount);
    elementsQuery.set("deferred_intent[currency]", currency);
    elementsQuery.set("deferred_intent[setup_future_usage]", "off_session");
    elementsQuery.set("deferred_intent[payment_method_types][0]", "card");
    elementsQuery.set("currency", currency);
    elementsQuery.set("elements_init_source", "custom_checkout");
    elementsQuery.set("referrer_host", "chatgpt.com");
    elementsQuery.set("stripe_js_id", clientSessionID);
    elementsQuery.set("locale", "zh");
    elementsQuery.set("type", "deferred_intent");
    elementsQuery.set("checkout_session_id", checkoutSessionId);
    elementsJSON = await stripeRequest(client, "GET", "/v1/elements/sessions", {
      queryValues: elementsQuery,
      publishableKey,
    });

    if (!clean(initChecksum) && clean(taxJSON.init_checksum)) {
      initJSON.init_checksum = taxJSON.init_checksum;
    }
    if (!clean(checkoutConfigID) && clean(taxJSON.config_id)) {
      initJSON.config_id = taxJSON.config_id;
    }
  }

  const elementsSessionID = firstNonEmpty(valueString(elementsJSON.session_id), seededElementsSessionID);
  const elementsConfigID = valueString(elementsJSON.config_id);

  const confirmBody = new URLSearchParams();
  confirmBody.set("guid", randomGuid());
  confirmBody.set("muid", randomGuid());
  confirmBody.set("sid", randomGuid());
  if (profile.name) confirmBody.set("payment_method_data[billing_details][name]", profile.name);
  if (profile.email) confirmBody.set("payment_method_data[billing_details][email]", profile.email);
  confirmBody.set("payment_method_data[billing_details][address][line1]", firstNonEmpty(profile.line1, DEFAULT_PROFILE.line1));
  confirmBody.set("payment_method_data[billing_details][address][city]", firstNonEmpty(profile.city, DEFAULT_PROFILE.city));
  confirmBody.set("payment_method_data[billing_details][address][state]", firstNonEmpty(profile.state, DEFAULT_PROFILE.state));
  confirmBody.set("payment_method_data[billing_details][address][postal_code]", firstNonEmpty(profile.postal, DEFAULT_PROFILE.postal));
  confirmBody.set("payment_method_data[billing_details][address][country]", firstNonEmpty(profile.country, DEFAULT_PROFILE.country));
  confirmBody.set("payment_method_data[type]", "card");
  confirmBody.set("payment_method_data[card][number]", normalizeCardNumber(card.number));
  confirmBody.set("payment_method_data[card][cvc]", card.cvc);
  confirmBody.set("payment_method_data[card][exp_year]", card.expYear);
  confirmBody.set("payment_method_data[card][exp_month]", card.expMonth);
  confirmBody.set("payment_method_data[allow_redisplay]", "unspecified");
  confirmBody.set("payment_method_data[pasted_fields]", "number,cvc");
  confirmBody.set("payment_method_data[payment_user_agent]", `stripe.js/${DEFAULT_JS_VERSION}; stripe-js-v3/${DEFAULT_JS_VERSION}; payment-element; ${mode === "setup" ? "setup-intent" : "deferred-intent"}`);
  confirmBody.set("payment_method_data[referrer]", "https://chatgpt.com");
  confirmBody.set("payment_method_data[time_on_page]", "120000");
  confirmBody.set("payment_method_data[client_attribution_metadata][client_session_id]", clientSessionID);
  confirmBody.set("payment_method_data[client_attribution_metadata][checkout_session_id]", checkoutSessionId);
  confirmBody.set("payment_method_data[client_attribution_metadata][merchant_integration_source]", "elements");
  confirmBody.set("payment_method_data[client_attribution_metadata][merchant_integration_subtype]", "payment-element");
  confirmBody.set("payment_method_data[client_attribution_metadata][merchant_integration_version]", "2021");
  if (mode !== "setup") {
    confirmBody.set("payment_method_data[client_attribution_metadata][payment_intent_creation_flow]", "deferred");
  }
  confirmBody.set("payment_method_data[client_attribution_metadata][payment_method_selection_flow]", "automatic");
  confirmBody.set("payment_method_data[client_attribution_metadata][elements_session_id]", elementsSessionID);
  if (elementsConfigID) confirmBody.set("payment_method_data[client_attribution_metadata][elements_session_config_id]", elementsConfigID);
  if (checkoutConfigID) confirmBody.set("payment_method_data[client_attribution_metadata][checkout_config_id]", checkoutConfigID);
  confirmBody.set("payment_method_data[client_attribution_metadata][merchant_integration_additional_elements][0]", "payment");
  confirmBody.set("payment_method_data[client_attribution_metadata][merchant_integration_additional_elements][1]", "address");
  if (initChecksum) confirmBody.set("init_checksum", initChecksum);
  confirmBody.set("version", DEFAULT_JS_VERSION);
  if (mode !== "setup") {
    confirmBody.set("expected_amount", expectedAmount);
  }
  confirmBody.set("expected_payment_method_type", "card");
  confirmBody.set("elements_session_client[elements_init_source]", "custom_checkout");
  confirmBody.set("elements_session_client[referrer_host]", "chatgpt.com");
  confirmBody.set("elements_session_client[session_id]", elementsSessionID);
  confirmBody.set("elements_session_client[stripe_js_id]", clientSessionID);
  confirmBody.set("elements_session_client[locale]", "zh");
  confirmBody.set("elements_session_client[is_aggregation_expected]", "false");
  confirmBody.set("client_attribution_metadata[client_session_id]", clientSessionID);
  confirmBody.set("client_attribution_metadata[checkout_session_id]", checkoutSessionId);
  confirmBody.set("client_attribution_metadata[merchant_integration_source]", "checkout");
  confirmBody.set("client_attribution_metadata[merchant_integration_subtype]", "payment-element");
  confirmBody.set("client_attribution_metadata[merchant_integration_version]", "custom");
  if (mode !== "setup") {
    confirmBody.set("client_attribution_metadata[payment_intent_creation_flow]", "deferred");
  }
  confirmBody.set("client_attribution_metadata[payment_method_selection_flow]", "automatic");
  confirmBody.set("client_attribution_metadata[elements_session_id]", elementsSessionID);
  if (elementsConfigID) confirmBody.set("client_attribution_metadata[elements_session_config_id]", elementsConfigID);
  if (checkoutConfigID) confirmBody.set("client_attribution_metadata[checkout_config_id]", checkoutConfigID);
  confirmBody.set("client_attribution_metadata[merchant_integration_additional_elements][0]", "payment");
  confirmBody.set("client_attribution_metadata[merchant_integration_additional_elements][1]", "address");

  let confirmJSON = await stripeRequest(client, "POST", `/v1/payment_pages/${encodeURIComponent(checkoutSessionId)}/confirm`, {
    bodyValues: confirmBody,
    publishableKey,
  });
  confirmJSON = await runNextActionIfNeeded(client, confirmJSON, checkoutSessionId, publishableKey, env);

  const paymentStatus = firstNonEmpty(readStatusField(confirmJSON, "payment_status"), "unknown");
  const checkoutStatus = firstNonEmpty(readStatusField(confirmJSON, "status"), "unknown");
  const setupIntent = firstNonEmpty(valueString(confirmJSON?.setup_intent?.status), "unknown");
  const paymentIntent = firstNonEmpty(valueString(confirmJSON?.payment_intent?.status), "unknown");
  const submissionState = firstNonEmpty(valueString(confirmJSON?.submission_attempt?.state), "unknown");
  const nextActionType = firstNonEmpty(detectNextActionType(confirmJSON), "unknown");
  const failureReason = resolveFailureReason(confirmJSON, {
    paymentStatus,
    checkoutStatus,
    setupIntent,
    paymentIntent,
    submissionState,
    nextActionType,
  });

  return { paymentStatus, checkoutStatus, setupIntent, paymentIntent, submissionState, nextActionType, failureReason };
}

async function stripeRequest(client, method, path, { queryValues, bodyValues, publishableKey }) {
  const normalizedMethod = clean(method).toUpperCase();
  if (normalizedMethod !== "GET" && normalizedMethod !== "POST") {
    throw new Error("不支持的请求方法");
  }
  if (!path.startsWith("/v1/")) {
    throw new Error("stripe path 必须以 /v1/ 开头");
  }
  const key = clean(publishableKey);
  if (!key) {
    throw new Error("publishable_key 不能为空");
  }
  const q = queryValues instanceof URLSearchParams ? new URLSearchParams(queryValues) : new URLSearchParams();
  const b = bodyValues instanceof URLSearchParams ? new URLSearchParams(bodyValues) : new URLSearchParams();

  if (normalizedMethod === "GET") {
    if (!q.get("key")) q.set("key", key);
    if (!q.get("_stripe_version")) q.set("_stripe_version", DEFAULT_STRIPE_VERSION);
  } else {
    if (!b.get("key")) b.set("key", key);
    if (!b.get("_stripe_version")) b.set("_stripe_version", DEFAULT_STRIPE_VERSION);
  }

  let requestURL = `https://api.stripe.com${path}`;
  if (q.toString()) requestURL += `?${q.toString()}`;

  const headers = new Headers({ Accept: "application/json" });
  let body = undefined;
  if (normalizedMethod === "POST") {
    headers.set("Content-Type", "application/x-www-form-urlencoded");
    body = b.toString();
  }

  const response = await client.fetch(requestURL, { method: normalizedMethod, headers, body });
  const rawBody = await response.text();
  if (!response.ok) {
    throw new Error(`stripe http ${response.status}: ${trimMessage(rawBody || response.statusText || "request failed")}`);
  }
  if (!rawBody) return {};

  let parsed;
  try {
    parsed = JSON.parse(rawBody);
  } catch (err) {
    throw new Error("stripe 响应解析失败");
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("stripe 响应格式错误");
  }
  return parsed;
}

async function runNextActionIfNeeded(client, payload, checkoutSessionId, publishableKey, env) {
  const hasFingerprintAction = hasThreeDSFingerprintNextAction(payload);
  const action = extractThreeDSFingerprintAction(payload);
  if (!action) {
    if (hasFingerprintAction) {
      payload.three_ds_detected = true;
      payload.three_ds_executed = false;
      payload.three_ds_error = "检测到3DS指纹动作，但缺少可执行参数(three_ds_method_url/threeDSMethodData)";
    }
    return payload;
  }
  const provider = resolveThreeDSProvider(action.directoryServerName, action.methodURL);
  const allow3DS = resolveAllowThreeDS(client, env);
  if (!allow3DS) {
    payload.three_ds_provider = provider;
    payload.three_ds_executed = false;
    payload.three_ds_skipped = true;
    payload.three_ds_skip_reason = "disabled_by_admin";
    payload.three_ds_error = THREE_DS_DISABLED_MESSAGE;
    return payload;
  }
  try {
    if (provider === "apata") {
      await runApataThreeDS(client, action, env, publishableKey);
    } else {
      await executeThreeDSMethodRequest(client, action, {
        Origin: "https://js.stripe.com",
        Referer: "https://js.stripe.com/",
        "User-Agent": "Mozilla/5.0",
      });
    }
    payload.three_ds_provider = provider;
    payload.three_ds_executed = true;
  } catch (err) {
    payload.three_ds_error = trimMessage(err instanceof Error ? err.message : String(err));
    return payload;
  }

  if (action.setupIntentID) {
    try {
      const setupIntentQuery = new URLSearchParams();
      setupIntentQuery.set("is_stripe_sdk", "false");
      if (action.setupIntentClientSecret) {
        setupIntentQuery.set("client_secret", action.setupIntentClientSecret);
      }
      const setupIntent = await stripeRequest(client, "GET", `/v1/setup_intents/${encodeURIComponent(action.setupIntentID)}`, {
        queryValues: setupIntentQuery,
        publishableKey,
      });
      payload.setup_intent = setupIntent;
    } catch (err) {
      payload.setup_intent_refresh_error = trimMessage(err instanceof Error ? err.message : String(err));
    }
  }

  try {
    const latestPage = await stripeRequest(client, "GET", `/v1/payment_pages/${encodeURIComponent(checkoutSessionId)}`, {
      publishableKey,
    });
    mergePaymentPageState(payload, latestPage);
  } catch (err) {
    payload.payment_page_refresh_error = trimMessage(err instanceof Error ? err.message : String(err));
  }
  return payload;
}

function hasThreeDSFingerprintNextAction(payload) {
  const actions = collectNextActions(payload);
  for (const action of actions) {
    const sdk = action && action.use_stripe_sdk && typeof action.use_stripe_sdk === "object"
      ? action.use_stripe_sdk
      : null;
    if (!sdk) continue;
    const stripeJS = sdk.stripe_js && typeof sdk.stripe_js === "object" ? sdk.stripe_js : null;
    const sdkType = firstNonEmpty(clean(sdk.type), clean(stripeJS && stripeJS.type));
    if (sdkType === "stripe_3ds2_fingerprint") return true;
  }
  return false;
}

function extractThreeDSFingerprintAction(payload) {
  if (!payload || typeof payload !== "object") return null;
  const setupIntent = payload.setup_intent && typeof payload.setup_intent === "object" ? payload.setup_intent : {};
  const setupIntentID = clean(setupIntent.id);
  const setupIntentClientSecret = clean(setupIntent.client_secret);

  const actions = collectNextActions(payload);
  for (const action of actions) {
    if (clean(action.type) !== "use_stripe_sdk") continue;
    const sdk = action.use_stripe_sdk && typeof action.use_stripe_sdk === "object" ? action.use_stripe_sdk : null;
    if (!sdk) continue;
    const stripeJS = sdk.stripe_js && typeof sdk.stripe_js === "object" ? sdk.stripe_js : null;
    const sdkType = firstNonEmpty(clean(sdk.type), clean(stripeJS && stripeJS.type));
    if (sdkType !== "stripe_3ds2_fingerprint") continue;
    const methodURL = firstNonEmpty(
      clean(sdk.three_ds_method_url),
      clean(sdk.threeDSMethodUrl),
      clean(stripeJS && stripeJS.three_ds_method_url),
      clean(stripeJS && stripeJS.threeDSMethodUrl),
      clean(stripeJS && stripeJS.url),
    );
    if (!methodURL) continue;
    let methodData = firstNonEmpty(
      clean(sdk.threeDSMethodData),
      clean(sdk.three_ds_method_data),
      clean(sdk.threeds_method_data),
      clean(stripeJS && stripeJS.threeDSMethodData),
      clean(stripeJS && stripeJS.three_ds_method_data),
      clean(stripeJS && stripeJS.threeds_method_data),
    );
    const directoryServerName = firstNonEmpty(clean(sdk.directory_server_name), clean(stripeJS && stripeJS.directory_server_name)).toLowerCase();
    const serverTransactionID = firstNonEmpty(clean(sdk.server_transaction_id), clean(stripeJS && stripeJS.server_transaction_id));
    const methodNotificationURL = firstNonEmpty(
      clean(sdk.three_ds_method_notification_url),
      clean(sdk.threeDSMethodNotificationURL),
      clean(stripeJS && stripeJS.three_ds_method_notification_url),
      clean(stripeJS && stripeJS.threeDSMethodNotificationURL),
    );
    const merchant = firstNonEmpty(clean(sdk.merchant), clean(stripeJS && stripeJS.merchant));
    const threeDSSource = firstNonEmpty(clean(sdk.three_d_secure_2_source), clean(stripeJS && stripeJS.three_d_secure_2_source));
    if (!methodData) {
      methodData = buildThreeDSMethodData({ serverTransactionID, methodNotificationURL, merchant, threeDSSource });
    }
    return {
      methodURL,
      methodData,
      directoryServerName,
      serverTransactionID,
      methodNotificationURL,
      merchant,
      threeDSSource,
      setupIntentID,
      setupIntentClientSecret,
    };
  }
  return null;
}

function collectNextActions(payload) {
  const out = [];
  if (payload.next_action && typeof payload.next_action === "object") out.push(payload.next_action);
  if (payload.setup_intent?.next_action && typeof payload.setup_intent.next_action === "object") out.push(payload.setup_intent.next_action);
  if (payload.payment_intent?.next_action && typeof payload.payment_intent.next_action === "object") out.push(payload.payment_intent.next_action);
  return out;
}

function buildThreeDSMethodData({ serverTransactionID, methodNotificationURL, merchant, threeDSSource }) {
  const txID = clean(serverTransactionID);
  const notificationURL = firstNonEmpty(clean(methodNotificationURL), buildStripeThreeDSMethodNotificationURL(merchant, threeDSSource));
  if (!txID || !notificationURL) {
    throw new Error("3DS 参数不完整");
  }
  return btoa(JSON.stringify({ threeDSServerTransID: txID, threeDSMethodNotificationURL: notificationURL }));
}

function buildStripeThreeDSMethodNotificationURL(merchant, source) {
  const m = clean(merchant);
  const s = clean(source);
  if (!m || !s) return "";
  return `https://hooks.stripe.com/3d_secure_2/fingerprint/${encodeURIComponent(m)}/${encodeURIComponent(s)}`;
}

function resolveThreeDSProvider(directoryServerName, methodURL) {
  const ds = clean(directoryServerName).toLowerCase();
  const host = safeHost(methodURL);
  if (host === "acs-method.apata.io" || host.endsWith(".apata.io")) return "apata";
  if (ds.includes("mastercard")) return "mastercard";
  if (ds.includes("visa")) return "visa";
  return "default";
}

function resolveAllowThreeDS(client, env) {
  void client;
  const fromEnv = clean(env && env.ALLOW_3DS);
  if (fromEnv) return toBoolean(fromEnv);
  return true;
}

async function executeThreeDSMethodRequest(client, action, headersMap) {
  if (!clean(action.methodURL)) throw new Error("3DS method url 为空");
  if (!clean(action.methodData)) throw new Error("3DS method data 为空");
  const body = new URLSearchParams({ threeDSMethodData: action.methodData });
  const headers = new Headers({ Accept: "*/*", "Content-Type": "application/x-www-form-urlencoded" });
  Object.entries(headersMap || {}).forEach(([key, value]) => {
    if (clean(key) && clean(value)) headers.set(key, value);
  });
  const resp = await client.fetch(action.methodURL, {
    method: "POST",
    headers,
    body: body.toString(),
  });
  const text = await resp.text();
  if (!resp.ok) throw new Error(`3DS method http ${resp.status}: ${trimMessage(text || resp.statusText)}`);
}

async function runApataThreeDS(client, action, env, publishableKey) {
  const methodHTML = await postThreeDSMethodAndReadHTML(client, action, {
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7",
    Origin: "https://js.stripe.com",
    Referer: "https://js.stripe.com/",
    "User-Agent": "Mozilla/5.0",
  });
  const stripeFingerprint = await postApataStripeMethodFingerprint(client, action, methodHTML);
  const rbaContext = extractApataRBAProfileContext(methodHTML);

  const recordURL = resolveApataRecordURL(action.methodURL, methodHTML);
  const payload = await loadApataReplayPayload(env, action, rbaContext, recordURL);
  const resolvedTransID = resolveApataServerTransactionID(methodHTML, action, payload);
  if (clean(rbaContext.sessionID) && clean(resolvedTransID) && clean(rbaContext.sessionID).toLowerCase() !== clean(resolvedTransID).toLowerCase()) {
    throw new Error("APATA 页面 rba.profile session_id 与 threeDSServerTransID 不一致");
  }
  if (resolvedTransID) {
    payload.threeDSServerTransID = resolvedTransID;
    action.serverTransactionID = resolvedTransID;
  }
  const headers = new Headers({
    Accept: "*/*",
    "Content-Type": "application/json",
    Origin: new URL(recordURL).origin,
    Referer: action.methodURL,
    "User-Agent": "Mozilla/5.0",
  });
  const resp = await client.fetch(recordURL, { method: "POST", headers, body: JSON.stringify(payload) });
  const raw = await resp.text();
  if (!resp.ok) {
    throw new Error(`APATA RecordBrowserInfo http ${resp.status}: ${trimMessage(raw || resp.statusText)}`);
  }

  await postApataThreeDSAuthenticate(client, action, payload, publishableKey, stripeFingerprint);
}

async function postThreeDSMethodAndReadHTML(client, action, headersMap) {
  if (!clean(action && action.methodURL)) throw new Error("3DS method url 为空");
  if (!clean(action && action.methodData)) throw new Error("3DS method data 为空");
  const body = new URLSearchParams({ threeDSMethodData: action.methodData });
  const headers = new Headers({ Accept: "*/*", "Content-Type": "application/x-www-form-urlencoded" });
  Object.entries(headersMap || {}).forEach(([key, value]) => {
    if (clean(key) && clean(value)) headers.set(key, value);
  });
  const resp = await client.fetch(action.methodURL, {
    method: "POST",
    headers,
    body: body.toString(),
  });
  const text = await resp.text();
  if (!resp.ok) throw new Error(`3DS method http ${resp.status}: ${trimMessage(text || resp.statusText)}`);
  return text;
}

async function postApataStripeMethodFingerprint(client, action, methodHTML) {
  const stripeURL = firstNonEmpty(
    extractFirstSubmatch(APATA_METHOD_FORM_ACTION_REGEXP_1, methodHTML),
    extractFirstSubmatch(APATA_METHOD_FORM_ACTION_REGEXP_2, methodHTML),
    clean(action && action.methodNotificationURL),
    buildStripeThreeDSMethodNotificationURL(clean(action && action.merchant), clean(action && action.threeDSSource)),
  );
  if (!stripeURL) {
    throw new Error("未找到 APATA method 页面中的 Stripe fingerprint 地址");
  }
  const stripeMethodData = firstNonEmpty(
    extractFirstSubmatch(APATA_METHOD_DATA_INPUT_REGEXP_1, methodHTML),
    extractFirstSubmatch(APATA_METHOD_DATA_INPUT_REGEXP_2, methodHTML),
    clean(action && action.methodData),
  );
  if (!stripeMethodData) {
    throw new Error("未找到 Stripe fingerprint 所需的 threeDSMethodData");
  }

  const refererOrigin = (() => {
    try {
      const parsed = new URL(clean(action && action.methodURL));
      return `${parsed.protocol}//${parsed.host}`;
    } catch (err) {
      return "https://acs-method.apata.io";
    }
  })();

  const body = new URLSearchParams();
  body.set("threeDSMethodData", stripeMethodData);
  const headers = new Headers({
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: refererOrigin,
    Referer: `${refererOrigin}/`,
    "User-Agent": "Mozilla/5.0",
  });
  const resp = await client.fetch(stripeURL, { method: "POST", headers, body: body.toString() });
  const html = await resp.text();
  if (!resp.ok) {
    throw new Error(`Stripe fingerprint http ${resp.status}: ${trimMessage(html || resp.statusText)}`);
  }
  const trampoline = extractApataTrampolinePayload(html);
  return {
    url: stripeURL,
    methodData: stripeMethodData,
    html,
    trampolineBase64: trampoline.rawBase64,
    trampolineData: trampoline.decoded,
  };
}

function resolveApataServerTransactionID(methodHTML, action, payload) {
  const direct = clean(action && action.serverTransactionID);
  if (direct) return direct;
  const divValue = clean(stripHtmlTags(extractFirstSubmatch(APATA_SERVER_TRANS_ID_DIV_REGEXP, methodHTML)));
  if (divValue) return divValue;
  const scriptValue = clean(extractFirstSubmatch(APATA_SERVER_TRANS_ID_SCRIPT_REGEXP, methodHTML));
  if (scriptValue) return scriptValue;

  const methodData = clean(action && action.methodData);
  if (methodData) {
    const parsed = parseThreeDSMethodData(methodData);
    const dataTx = clean(parsed && (parsed.threeDSServerTransID || parsed.three_ds_server_trans_id));
    if (dataTx) return dataTx;
  }
  return clean(payload && payload.threeDSServerTransID);
}

async function postApataThreeDSAuthenticate(client, action, payload, publishableKey, stripeFingerprint) {
  const sourceID = resolveApataThreeDSSource(action, stripeFingerprint && stripeFingerprint.url);
  if (!sourceID) {
    throw new Error("3DS2 authenticate 缺少 source 参数");
  }
  const key = clean(publishableKey);
  if (!key) {
    throw new Error("3DS2 authenticate 缺少 publishable_key");
  }

  const browserPayload = buildApataAuthenticateBrowserPayload(payload, action, stripeFingerprint && stripeFingerprint.methodData);
  const body = new URLSearchParams();
  body.set("source", sourceID);
  body.set("browser", browserPayload);
  body.set("one_click_authn_device_support[hosted]", "false");
  body.set("one_click_authn_device_support[same_origin_frame]", "false");
  body.set("one_click_authn_device_support[spc_eligible]", "true");
  body.set("one_click_authn_device_support[webauthn_eligible]", "true");
  body.set("one_click_authn_device_support[publickey_credentials_get_allowed]", "true");

  const resp = await stripeRequest(client, "POST", "/v1/3ds2/authenticate", {
    bodyValues: body,
    publishableKey: key,
  });
  const state = clean(resp && resp.state).toLowerCase();
  if (state && state !== "succeeded") {
    throw new Error(`3DS2 authenticate 未成功: state=${state}`);
  }
  if (resp && resp.error && typeof resp.error === "object") {
    const message = clean(resp.error.message);
    throw new Error(firstNonEmpty(message, "3DS2 authenticate 返回错误"));
  }
}

function resolveApataThreeDSSource(action, stripeURL) {
  const direct = clean(action && action.threeDSSource);
  if (direct) return direct;
  const candidates = [clean(stripeURL), clean(action && action.methodNotificationURL)];
  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      const parsed = new URL(candidate);
      const segments = parsed.pathname.split("/").filter(Boolean);
      if (segments.length) {
        return clean(segments[segments.length - 1]);
      }
    } catch (err) {
    }
  }
  return "";
}

function buildApataAuthenticateBrowserPayload(payload, action, methodData) {
  const fp = payload && payload.fingerprint && typeof payload.fingerprint === "object" ? payload.fingerprint : {};
  const nav = fp.navigator && typeof fp.navigator === "object" ? fp.navigator : {};
  const screen = fp.screen && typeof fp.screen === "object" ? fp.screen : {};
  const timezone = fp.timezone && typeof fp.timezone === "object" ? fp.timezone : {};
  const fingerprintData = firstNonEmpty(clean(methodData), clean(action && action.methodData), buildApataFingerprintData(clean(action && action.serverTransactionID)));
  return JSON.stringify({
    fingerprintAttempted: true,
    fingerprintData,
    challengeWindowSize: null,
    threeDSCompInd: "Y",
    browserJavaEnabled: false,
    browserJavascriptEnabled: true,
    browserLanguage: firstNonEmpty(clean(nav.language), "zh-CN"),
    browserColorDepth: firstNonEmpty(valueString(screen.colorDepth), "32"),
    browserScreenHeight: firstNonEmpty(valueString(screen.height), "960"),
    browserScreenWidth: firstNonEmpty(valueString(screen.width), "1536"),
    browserTZ: firstNonEmpty(valueString(timezone.offset), "-480"),
    browserUserAgent: firstNonEmpty(clean(nav.userAgent), "Mozilla/5.0"),
  });
}

function buildApataFingerprintData(serverTransactionID) {
  const txID = clean(serverTransactionID);
  if (!txID) return "";
  return btoa(JSON.stringify({ threeDSServerTransID: txID }));
}

function parseThreeDSMethodData(raw) {
  const value = clean(raw);
  if (!value) return null;
  const candidateValues = [value];
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  if (normalized !== value) candidateValues.push(normalized);
  const padLen = normalized.length % 4;
  if (padLen > 0) {
    candidateValues.push(`${normalized}${"=".repeat(4 - padLen)}`);
  }
  for (const encoded of candidateValues) {
    try {
      const decoded = atob(encoded);
      const parsed = JSON.parse(decoded);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) return parsed;
    } catch (err) {
    }
  }
  return null;
}

function extractFirstSubmatch(regex, text) {
  if (!(regex instanceof RegExp)) return "";
  const source = String(text || "");
  const match = source.match(regex);
  return clean(match && match[1]);
}

function stripHtmlTags(raw) {
  return String(raw || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function resolveApataRecordURL(methodURL, methodHTML) {
  const fromHTML = clean(extractFirstSubmatch(APATA_RECORD_URL_REGEXP, methodHTML));
  if (fromHTML) return fromHTML;
  try {
    return `${new URL(clean(methodURL)).origin}/v1/RecordBrowserInfo`;
  } catch (err) {
    return "https://acs-method.apata.io/v1/RecordBrowserInfo";
  }
}

function extractApataTrampolinePayload(stripeHTML) {
  const rawBase64 = clean(extractFirstSubmatch(APATA_TRAMPOLINE_PAYLOAD_REGEXP, stripeHTML));
  if (!rawBase64) return { rawBase64: "", decoded: "" };
  const normalized = rawBase64.replace(/\s+/g, "");
  const padded = normalized.length % 4 === 0 ? normalized : `${normalized}${"=".repeat(4 - (normalized.length % 4))}`;
  try {
    return { rawBase64: normalized, decoded: clean(atob(padded)) };
  } catch (err) {
    return { rawBase64: normalized, decoded: "" };
  }
}

function extractApataRBAProfileContext(methodHTML) {
  const raw = String(methodHTML || "");
  const match = raw.match(APATA_RBA_PROFILE_CALL_REGEXP);
  const host = decodeHtmlEntities(clean(match && match[1]));
  const orgID = decodeHtmlEntities(clean(match && match[2]));
  const sessionID = decodeHtmlEntities(clean(match && match[3]));
  return {
    host,
    orgID: firstNonEmpty(orgID, decodeHtmlEntities(clean(extractFirstSubmatch(APATA_RBA_ORG_ID_REGEXP, raw)))),
    sessionID: firstNonEmpty(sessionID, decodeHtmlEntities(clean(extractFirstSubmatch(APATA_RBA_SESSION_ID_REGEXP, raw)))),
  };
}

function decodeHtmlEntities(raw) {
  return String(raw || "")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

async function loadApataReplayPayload(env, action, rbaContext, recordURL) {
  const fromEnv = firstNonEmpty(clean(env && env.THREEDS_APATA_REPLAY_PAYLOAD), clean(env && env.APATA_REPLAY_PAYLOAD));
  let payload = cloneData(DEFAULT_APATA_REPLAY_PAYLOAD);
  if (fromEnv) {
    try {
      const parsed = JSON.parse(fromEnv);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        payload = parsed;
      }
    } catch (err) {
    }
  }

  const randomProfile = resolveApataRandomProfile(env);
  const profile = buildApataRequestProfile(randomProfile);
  const host = safeHost(action && action.methodURL);
  const cacheKey = buildApataDeviceProfileCacheKey(host, profile, rbaContext, recordURL);
  const txID = clean(action && action.serverTransactionID);

  payload.threeDSServerTransID = firstNonEmpty(txID, clean(payload.threeDSServerTransID));
  const cached = randomProfile ? getApataCachedDeviceProfile(cacheKey) : null;
  if (cached) {
    payload.possessionDeviceId = cached.possessionDeviceId;
    payload.fingerprint = cloneData(cached.fingerprint);
    payload.computedValue = clean(cached.computedValue);
  } else {
    applyApataDynamicFingerprint(payload, profile, randomProfile, rbaContext);
    if (randomProfile) {
      const computedValue = await buildApataComputedValue(payload);
      payload.computedValue = computedValue;
      setApataCachedDeviceProfile(cacheKey, {
        possessionDeviceId: clean(payload.possessionDeviceId),
        computedValue,
        fingerprint: cloneData(payload.fingerprint),
      });
    }
  }

  if (!clean(payload.computedValue)) {
    payload.computedValue = await buildApataComputedValue(payload);
  }
  return payload;
}

function resolveApataRandomProfile(env) {
  const raw = firstNonEmpty(clean(env && env.THREEDS_APATA_RANDOM_PROFILE), clean(env && env.APATA_RANDOM_PROFILE));
  if (!raw) return true;
  const normalized = raw.toLowerCase();
  return !(normalized === "0" || normalized === "false" || normalized === "off" || normalized === "no" || normalized === "fixed" || normalized === "static");
}

function buildApataRequestProfile(randomProfile) {
  const base = {
    userAgent: valueString(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.navigator?.userAgent),
    platform: valueString(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.navigator?.platform),
    language: valueString(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.navigator?.language),
    languages: valueString(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.navigator?.languages),
    vendor: valueString(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.navigator?.vendor),
    timezone: valueString(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.timezone?.timezone),
    timezoneOffset: Number(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.timezone?.offset) || -480,
    width: Number(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.screen?.width) || 1920,
    height: Number(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.screen?.height) || 1080,
    colorDepth: Number(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.screen?.colorDepth) || 24,
    pixelDepth: Number(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.screen?.pixelDepth) || 24,
    devicePixelRatio: Number(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.screen?.devicePixelRatio) || 1,
    orientation: valueString(DEFAULT_APATA_REPLAY_PAYLOAD?.fingerprint?.screen?.orientation) || "landscape-primary",
  };
  if (!randomProfile) return base;

  const ua = pickRandom(APATA_UA_PROFILES);
  const region = pickRandom(APATA_REGIONAL_PROFILES);
  const screen = pickRandom(APATA_SCREEN_PROFILES);
  return {
    ...base,
    ...ua,
    ...region,
    ...screen,
    hardwareConcurrency: pickRandom([4, 6, 8, 10, 12, 16]),
    deviceMemory: pickRandom([4, 8, 16, 32]),
    maxTouchPoints: pickRandom([0, 0, 1, 5, 10]),
  };
}

function buildApataDeviceProfileCacheKey(host, profile, rbaContext, recordURL) {
  return [
    clean(host),
    clean(profile && profile.platform),
    clean(profile && profile.language),
    clean(profile && profile.userAgent),
    clean(rbaContext && rbaContext.orgID),
    clean(rbaContext && rbaContext.host),
    clean(recordURL),
  ].join("|");
}

function getApataCachedDeviceProfile(key) {
  const cacheKey = clean(key);
  if (!cacheKey || !apataDeviceProfileCache || typeof apataDeviceProfileCache.get !== "function") return null;
  const entry = apataDeviceProfileCache.get(cacheKey);
  if (!entry || Number(entry.expireAt) < Date.now()) {
    apataDeviceProfileCache.delete(cacheKey);
    return null;
  }
  return entry;
}

function setApataCachedDeviceProfile(key, profile) {
  const cacheKey = clean(key);
  if (!cacheKey || !profile || typeof profile !== "object") return;
  if (apataDeviceProfileCache.size > 256) {
    for (const [k, v] of apataDeviceProfileCache.entries()) {
      if (!v || Number(v.expireAt) < Date.now()) apataDeviceProfileCache.delete(k);
    }
  }
  apataDeviceProfileCache.set(cacheKey, {
    possessionDeviceId: clean(profile.possessionDeviceId),
    computedValue: clean(profile.computedValue),
    fingerprint: cloneData(profile.fingerprint),
    expireAt: Date.now() + APATA_DEVICE_PROFILE_TTL_MS,
  });
}

function applyApataDynamicFingerprint(payload, profile, randomProfile, rbaContext) {
  if (!payload || typeof payload !== "object") return;
  if (!payload.fingerprint || typeof payload.fingerprint !== "object") payload.fingerprint = {};
  if (!payload.fingerprint.navigator || typeof payload.fingerprint.navigator !== "object") payload.fingerprint.navigator = {};
  if (!payload.fingerprint.screen || typeof payload.fingerprint.screen !== "object") payload.fingerprint.screen = {};
  if (!payload.fingerprint.timezone || typeof payload.fingerprint.timezone !== "object") payload.fingerprint.timezone = {};

  const nav = payload.fingerprint.navigator;
  const screen = payload.fingerprint.screen;
  const timezone = payload.fingerprint.timezone;
  nav.cookieEnabled = nav.cookieEnabled !== false;
  nav.onLine = nav.onLine !== false;
  nav.language = firstNonEmpty(clean(profile.language), clean(nav.language), "zh-CN");
  nav.languages = firstNonEmpty(clean(profile.languages), clean(nav.languages), `${nav.language}, en, en-US`);
  nav.userAgent = firstNonEmpty(clean(profile.userAgent), clean(nav.userAgent), "Mozilla/5.0");
  nav.platform = firstNonEmpty(clean(profile.platform), clean(nav.platform), "Win32");
  nav.vendor = firstNonEmpty(clean(profile.vendor), clean(nav.vendor), "Google Inc.");
  nav.hardwareConcurrency = randomProfile ? Number(profile.hardwareConcurrency || pickRandom([4, 6, 8, 10, 12, 16])) : Number(nav.hardwareConcurrency || 8);
  nav.deviceMemory = randomProfile ? Number(profile.deviceMemory || pickRandom([4, 8, 16, 32])) : Number(nav.deviceMemory || 8);
  nav.maxTouchPoints = randomProfile ? Number(profile.maxTouchPoints || pickRandom([0, 0, 1, 5, 10])) : Number(nav.maxTouchPoints || 0);
  nav.appCodeName = firstNonEmpty(clean(nav.appCodeName), "Mozilla");
  nav.appName = firstNonEmpty(clean(nav.appName), "Netscape");
  nav.appVersion = firstNonEmpty(clean(nav.appVersion), clean(nav.userAgent), "Mozilla/5.0");
  nav.product = firstNonEmpty(clean(nav.product), "Gecko");
  nav.productSub = firstNonEmpty(clean(nav.productSub), "20030107");
  nav.vendorSub = firstNonEmpty(clean(nav.vendorSub), "");
  nav.webdriver = false;
  nav.pdfViewerEnabled = nav.pdfViewerEnabled !== false;
  nav.doNotTrack = firstNonEmpty(clean(nav.doNotTrack), "1");
  if (!Array.isArray(nav.plugins) || !nav.plugins.length) nav.plugins = cloneData(APATA_FP_PLUGIN_NAMES);
  if (!Array.isArray(nav.mediaDevices) || !nav.mediaDevices.length) {
    nav.mediaDevices = [{ kind: "audioinput" }, { kind: "videoinput" }, { kind: "audiooutput" }];
  }

  const width = Number(profile.width) || 1920;
  const height = Number(profile.height) || 1080;
  const availWidthGap = randomProfile ? randomInt(0, 56) : 0;
  const availHeightGap = randomProfile ? randomInt(0, 96) : 0;
  screen.width = width;
  screen.height = height;
  screen.availWidth = Math.max(320, width - availWidthGap);
  screen.availHeight = Math.max(320, height - availHeightGap);
  screen.colorDepth = Number(profile.colorDepth) || 24;
  screen.pixelDepth = Number(profile.pixelDepth) || 24;
  screen.orientation = firstNonEmpty(clean(profile.orientation), clean(screen.orientation), "landscape-primary");
  screen.devicePixelRatio = Number(profile.devicePixelRatio) || 1;

  timezone.timezone = firstNonEmpty(clean(profile.timezone), clean(timezone.timezone), "Asia/Shanghai");
  timezone.offset = Number(profile.timezoneOffset);
  if (!Number.isFinite(timezone.offset)) timezone.offset = -480;

  if (!payload.possessionDeviceId || randomProfile) {
    payload.possessionDeviceId = randomHex(64);
  }
  if (!payload.fingerprint.webGl || typeof payload.fingerprint.webGl !== "object") {
    payload.fingerprint.webGl = {};
  }
  payload.fingerprint.webGl.vendor = firstNonEmpty(
    clean(payload.fingerprint.webGl.vendor),
    clean(profile.vendor) ? `Google Inc. (${clean(profile.vendor)})` : "Google Inc. (Intel)",
  );
  payload.fingerprint.webGl.renderer = firstNonEmpty(
    clean(payload.fingerprint.webGl.renderer),
    clean(profile.platform) ? `ANGLE (${clean(profile.platform)} GPU, Direct3D11)` : "ANGLE (Intel, Intel(R) UHD Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)",
  );
  payload.fingerprint.webGl.dataHash = randomProfile || !clean(payload.fingerprint.webGl.dataHash)
    ? randomHex(64)
    : clean(payload.fingerprint.webGl.dataHash);
  payload.fingerprint.canvas = randomProfile || !clean(payload.fingerprint.canvas)
    ? randomHex(64)
    : clean(payload.fingerprint.canvas);

  payload.fingerprint.adblock = payload.fingerprint.adblock === true;
  if (randomProfile || !payload.fingerprint.clientRects || typeof payload.fingerprint.clientRects !== "object") {
    payload.fingerprint.clientRects = buildApataFingerprintClientRects();
  }
  if (randomProfile || !payload.fingerprint.audio || typeof payload.fingerprint.audio !== "object") {
    payload.fingerprint.audio = buildApataFingerprintAudio();
  }
  if (randomProfile || !payload.fingerprint.permissions || typeof payload.fingerprint.permissions !== "object") {
    payload.fingerprint.permissions = buildApataFingerprintPermissions();
  }
  nav.permissions = {
    notifications: pickRandom(APATA_PERMISSION_STATES),
    camera: pickRandom(APATA_PERMISSION_STATES),
    microphone: pickRandom(APATA_PERMISSION_STATES),
    geolocation: pickRandom(APATA_PERMISSION_STATES),
  };
  nav.connection = {
    effectiveType: pickRandom(["4g", "4g", "3g", "wifi"]),
    downlink: randomFloat(0.8, 10.0, 1),
    rtt: randomInt(20, 140),
    saveData: false,
  };
  if (randomProfile) {
    payload.fingerprint.browserBars = {
      locationbar: true,
      menubar: true,
      personalbar: false,
      scrollbars: true,
      statusbar: false,
      toolbar: true,
    };
    payload.fingerprint.sensors = buildApataFingerprintSensors(nav.maxTouchPoints);
    payload.fingerprint.storage = {
      localStorage: true,
      sessionStorage: true,
      indexedDB: true,
      openDatabase: false,
    };
    payload.fingerprint.fonts = {
      installed: cloneData(APATA_FP_INSTALLED_FONTS),
      notInstalled: cloneData(APATA_FP_NOT_INSTALLED_FONTS),
    };
  }
  if (rbaContext && (clean(rbaContext.host) || clean(rbaContext.orgID) || clean(rbaContext.sessionID))) {
    payload.fingerprint.rba = {
      host: clean(rbaContext.host),
      orgId: clean(rbaContext.orgID),
      sessionId: clean(rbaContext.sessionID),
    };
  }
}

function buildApataFingerprintPermissions() {
  const out = {};
  APATA_FP_PERMISSION_NAMES.forEach((name) => {
    out[name] = pickRandom(APATA_PERMISSION_STATES);
  });
  return out;
}

function buildApataFingerprintAudio() {
  return {
    totalUniqueSamples: randomInt(40, 120),
    sampleSlice: [randomInt(-180, 180), randomInt(-180, 180), randomInt(-180, 180), randomInt(-180, 180)],
  };
}

function buildApataFingerprintSensors(maxTouchPoints) {
  return {
    motion: true,
    orientation: true,
    touch: Number(maxTouchPoints) > 0,
  };
}

function buildApataFingerprintClientRects() {
  return {
    x: randomInt(0, 4),
    y: randomInt(0, 4),
  };
}

async function buildApataComputedValue(payload) {
  const source = JSON.stringify({
    possessionDeviceId: clean(payload && payload.possessionDeviceId),
    fingerprint: payload && payload.fingerprint ? payload.fingerprint : {},
  });
  try {
    if (crypto && crypto.subtle && typeof crypto.subtle.digest === "function") {
      const digest = await crypto.subtle.digest("SHA-256", encodeUTF8(source));
      return bytesToHex(new Uint8Array(digest)).slice(0, 32);
    }
  } catch (err) {
  }
  return randomHex(16);
}

function bytesToHex(arr) {
  const input = arr instanceof Uint8Array ? arr : new Uint8Array(0);
  return Array.from(input).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function randomInt(min, max) {
  const lo = Math.floor(Number(min) || 0);
  const hi = Math.floor(Number(max) || 0);
  if (hi <= lo) return lo;
  const span = hi - lo + 1;
  const r = randomNumber01();
  return lo + Math.floor(r * span);
}

function randomFloat(min, max, precision) {
  const lo = Number(min) || 0;
  const hi = Number(max) || lo;
  const p = Math.max(0, Number(precision) || 0);
  const value = lo + randomNumber01() * (hi - lo);
  return Number(value.toFixed(p));
}

function randomNumber01() {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return arr[0] / 4294967296;
}

function pickRandom(list) {
  const arr = Array.isArray(list) ? list : [];
  if (!arr.length) return "";
  const index = randomInt(0, arr.length - 1);
  const item = arr[index];
  return item && typeof item === "object" ? cloneData(item) : item;
}

function cloneData(value) {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (err) {
    return value;
  }
}

function mergePaymentPageState(target, latest) {
  if (!target || !latest || typeof target !== "object" || typeof latest !== "object") return;
  ["payment_status", "status", "next_action", "setup_intent", "payment_intent", "submission_attempt"].forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(latest, key)) target[key] = latest[key];
  });
}

function readStatusField(payload, key) {
  if (!payload || typeof payload !== "object") return "";
  if (clean(payload[key])) return clean(payload[key]);
  if (payload.checkout_session && typeof payload.checkout_session === "object" && clean(payload.checkout_session[key])) {
    return clean(payload.checkout_session[key]);
  }
  if (payload.session && typeof payload.session === "object" && clean(payload.session[key])) {
    return clean(payload.session[key]);
  }
  return "";
}

function detectNextActionType(payload) {
  if (!payload || typeof payload !== "object") return "";
  return parseNextActionType(payload.next_action)
    || parseNextActionType(payload?.setup_intent?.next_action)
    || parseNextActionType(payload?.payment_intent?.next_action)
    || "";
}

function parseNextActionType(raw) {
  if (!raw) return "";
  if (typeof raw === "string") return clean(raw);
  if (typeof raw !== "object") return "";
  const outerType = clean(raw.type);
  if (!outerType) return firstNonEmpty(clean(raw.challenge_type), clean(raw.action_type));
  const nested = raw[outerType];
  if (nested && typeof nested === "object") {
    const nestedType = firstNonEmpty(clean(nested.type), clean(nested.challenge_type));
    if (nestedType) return nestedType;
  }
  if (outerType === "use_stripe_sdk" && raw.use_stripe_sdk && typeof raw.use_stripe_sdk === "object") {
    const sdkType = clean(raw.use_stripe_sdk.type);
    if (sdkType) return sdkType;
    const stripeJSType = clean(raw.use_stripe_sdk?.stripe_js?.type);
    if (stripeJSType) return stripeJSType;
  }
  return outerType;
}

function resolveFailureReason(payload, result) {
  if (result.paymentStatus === "paid" || result.paymentIntent === "succeeded" || result.setupIntent === "succeeded") return "none";
  if (result.submissionState === "succeeded" && !clean(payload?.three_ds_error)) return "none";
  if (normalizedKnownField(clean(payload?.three_ds_error))) return normalizedKnownField(clean(payload?.three_ds_error));
  if (normalizedKnownField(result.nextActionType)) return normalizedKnownField(result.nextActionType);

  const setupError = extractStripeErrorReason(payload?.setup_intent?.last_setup_error);
  if (setupError) return setupError;
  const paymentError = extractStripeErrorReason(payload?.payment_intent?.last_payment_error);
  if (paymentError) return paymentError;
  const submitReason = firstNonEmpty(
    clean(payload?.submission_attempt?.failure_reason),
    clean(payload?.submission_attempt?.failure_code),
    clean(payload?.submission_attempt?.error),
  );
  if (submitReason) return submitReason;

  for (const candidate of [result.setupIntent, result.paymentIntent, result.submissionState, result.checkoutStatus, result.paymentStatus]) {
    const normalized = normalizedKnownField(candidate);
    if (normalized) return normalized;
  }
  return "unknown";
}

function extractStripeErrorReason(raw) {
  if (!raw) return "";
  if (typeof raw === "string") return clean(raw);
  if (typeof raw !== "object") return "";
  return firstNonEmpty(clean(raw.code), clean(raw.decline_code), clean(raw.type), clean(raw.message));
}

function normalizedKnownField(raw) {
  const v = clean(raw);
  if (!v) return "";
  const lower = v.toLowerCase();
  if (lower === "unknown" || lower === "none" || lower === "null" || lower === "nil") return "";
  return v;
}

class StripeSessionClient {
  constructor() {
    this.cookies = new Map();
  }

  async fetch(url, init) {
    const headers = new Headers((init && init.headers) || {});
    const cookieHeader = this.getCookieHeader();
    if (cookieHeader) headers.set("Cookie", cookieHeader);
    const requestInit = { ...init, headers };
    const response = await fetch(url, requestInit);
    this.captureCookies(response.headers);
    return response;
  }

  captureCookies(headers) {
    const setCookies = readSetCookieHeaders(headers);
    for (const line of setCookies) {
      const firstPart = String(line || "").split(";")[0];
      const index = firstPart.indexOf("=");
      if (index <= 0) continue;
      const key = firstPart.slice(0, index).trim();
      const value = firstPart.slice(index + 1).trim();
      if (!key) continue;
      this.cookies.set(key, value);
    }
  }

  getCookieHeader() {
    if (!this.cookies.size) return "";
    return Array.from(this.cookies.entries())
      .map(([k, v]) => `${k}=${v}`)
      .join("; ");
  }
}

function encodeUTF8(raw) {
  return new TextEncoder().encode(String(raw || ""));
}

function readSetCookieHeaders(headers) {
  if (headers && typeof headers.getSetCookie === "function") {
    return headers.getSetCookie();
  }
  const raw = headers.get("set-cookie") || "";
  if (!raw) return [];
  const out = [];
  let buffer = "";
  let inExpires = false;
  for (let i = 0; i < raw.length; i += 1) {
    const ch = raw[i];
    buffer += ch;
    const lowerTail = buffer.slice(-8).toLowerCase();
    if (lowerTail === "expires=") {
      inExpires = true;
    }
    if (inExpires && ch === ";") {
      inExpires = false;
    }
    if (!inExpires && ch === ",") {
      const next = raw.slice(i + 1);
      if (/^\s*[A-Za-z0-9!#$%&'*+.^_`|~-]+=/.test(next)) {
        out.push(buffer.slice(0, -1).trim());
        buffer = "";
      }
    }
  }
  if (buffer.trim()) out.push(buffer.trim());
  return out;
}

function randomID(prefix) {
  return `${prefix}_${randomHex(4)}`;
}

function randomHex(bytes) {
  const n = Math.max(1, Number(bytes) || 1);
  const arr = new Uint8Array(n);
  crypto.getRandomValues(arr);
  return Array.from(arr).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function randomGuid() {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const raw = randomHex(16).padEnd(32, "0");
  return `${raw.slice(0, 8)}-${raw.slice(8, 12)}-${raw.slice(12, 16)}-${raw.slice(16, 20)}-${raw.slice(20, 32)}`;
}

function normalizeCardNumber(raw) {
  const digits = onlyDigits(raw);
  if (!digits) return "";
  const out = [];
  for (let i = 0; i < digits.length; i += 4) {
    out.push(digits.slice(i, i + 4));
  }
  return out.join(" ").trim();
}

function readTotal(payload) {
  return clean(payload?.total_summary?.total);
}

function amountIsZero(raw) {
  const input = clean(raw);
  if (!input) return false;
  const filtered = input.replace(/[^0-9.-]/g, "").trim();
  if (!filtered || filtered === "." || filtered === "-" || filtered === "-.") return false;
  const v = Number(filtered);
  return Number.isFinite(v) && v === 0;
}

function safeHost(input) {
  try {
    return new URL(String(input || "")).hostname.toLowerCase();
  } catch (err) {
    return "";
  }
}

function onlyDigits(raw) {
  return String(raw || "").replace(/\D/g, "");
}

function firstNonEmpty(...values) {
  for (const value of values) {
    const v = clean(value);
    if (v) return v;
  }
  return "";
}

function valueString(v) {
  if (v === null || v === undefined) return "";
  return clean(String(v));
}

function clean(v) {
  return String(v === undefined || v === null ? "" : v).trim();
}

function trimMessage(raw) {
  const text = clean(raw);
  if (!text) return "-";
  return text.length <= 360 ? text : `${text.slice(0, 360)}...`;
}
