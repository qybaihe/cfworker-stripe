# cfworker-stripe

一个可直接部署到 Cloudflare Workers 的 Stripe 绑卡 Worker。

## 接口

### `POST /api/v1/bind-card`

请求体：

```json
{
  "checkout_session_id": "cs_live_xxx",
  "publishable_key": "pk_live_xxx",
  "card": {
    "number": "4111111111111111",
    "exp_month": "12",
    "exp_year": "30",
    "cvc": "123"
  },
  "profile": {
    "name": "John Doe",
    "email": "john@example.com",
    "country": "US",
    "line1": "38 Pearl Avenue",
    "city": "Louisville",
    "state": "MS",
    "postal": "39339"
  }
}
```

成功响应示例：

```json
{
  "success": true,
  "data": {
    "checkout_session_id": "cs_live_xxx",
    "result": {
      "payment_status": "unpaid",
      "checkout_status": "open",
      "setup_intent_status": "succeeded",
      "payment_intent_status": "requires_payment_method",
      "submission_attempt_state": "succeeded",
      "next_action_type": "unknown",
      "failure_reason": "none"
    }
  }
}
```

### `GET /health`

健康检查接口。

## Cloudflare 环境变量

### 必填 / 推荐

- `API_TOKEN`
  - 保护接口用。请求时带：
    - `Authorization: Bearer <API_TOKEN>`
    - 或 `X-API-Key: <API_TOKEN>`
- `ALLOWED_ORIGIN`
  - CORS 允许的来源，默认 `*`

### 可选

- `ALLOW_3DS`
  - 是否允许执行 3DS，默认 `true`
- `THREEDS_APATA_REPLAY_PAYLOAD`
  - 自定义 APATA replay payload JSON
- `APATA_REPLAY_PAYLOAD`
  - 同上，兼容别名
- `THREEDS_APATA_RANDOM_PROFILE`
  - 是否启用随机设备指纹，默认开启
- `APATA_RANDOM_PROFILE`
  - 同上，兼容别名

## 本地检查

```bash
npm install
npm run check
```

## Wrangler 本地调试

```bash
npx wrangler dev
```

## 部署

### 方式 1：Cloudflare Dashboard 连接 GitHub

1. 在 Cloudflare Workers & Pages 中连接此仓库。
2. 让 Cloudflare 读取仓库根目录的 `wrangler.jsonc`。
3. 在 Dashboard 中配置环境变量 / Secrets。
4. 部署后会得到：
   - `https://<worker-name>.<subdomain>.workers.dev/api/v1/bind-card`
   - 或你绑定的自定义域名。

### 方式 2：Wrangler

```bash
npx wrangler deploy
```

## curl 示例

```bash
curl 'https://<your-worker>/api/v1/bind-card' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <API_TOKEN>' \
  --data '{
    "checkout_session_id": "cs_live_xxx",
    "publishable_key": "pk_live_xxx",
    "card": {
      "number": "4111111111111111",
      "exp_month": "12",
      "exp_year": "30",
      "cvc": "123"
    },
    "profile": {
      "name": "John Doe",
      "email": "john@example.com",
      "country": "US",
      "line1": "38 Pearl Avenue",
      "city": "Louisville",
      "state": "MS",
      "postal": "39339"
    }
  }'
```
