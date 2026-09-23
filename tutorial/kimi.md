---
title: Kimi (月之暗面) 配置指南
---

# 🌙 Kimi (月之暗面 / Moonshot AI) 配置指南

> **推荐指数**：⭐⭐⭐⭐  
> **特点**：超长文本理解能力优秀，能够深度提炼数周乃至数月的成长记录。

---

## 📋 申请步骤

1. 打开浏览器，访问 [Moonshot 开放平台](https://platform.moonshot.cn/) 并注册/登录账号。
2. 登录后进入开发者控制台，在左侧导航栏找到 **API Key 管理**。
3. 点击 **新建 API Key** 按钮创建新的密钥。
4. **复制生成的 API Key 密钥字符串**。

---

## 📸 步骤图文参考

### 步骤 1：进入开放平台并点击开始构造
访问 Kimi (Moonshot) 开放平台首页，点击 **开始构造** 进入开发者控制台：

<img src="/kimi/step1.png" alt="Kimi 开放平台开始构造" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

### 步骤 2：进入 API Key 管理
在控制台左侧菜单选择 **API Key 管理**，点击右上角的 **新建 API Key** 按钮：

<img src="/kimi/step2.png" alt="Moonshot 控制台 API Key 管理页面" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

### 步骤 3：输入名称并生成 Key
在弹窗中输入 API Key 名称（例如 `成长小记-ai报告`），点击 **确定** 即可生成并复制你的专属密钥：

<img src="/kimi/step3.png" alt="新建并复制 API Key" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

---

## 📌 App 内填报参数对照

| 配置项 | 填报内容 | 说明 |
| :--- | :--- | :--- |
| **API Key (密钥)** | `sk-xxxxxxxxxxxxxxxx` | 刚才复制的 Moonshot 密钥 |
| **接口地址 (Base URL)** | `https://api.moonshot.cn/v1` | 官方标准接口 (注意末尾带有 `/v1`) |
| **模型名称 (Model Name)** | `kimi-k2.6` | 填入推荐的模型名称 |

### 📱 手机 App 填报示范
打开《成长小记》App，进入 AI 配置页面，按照如下示范填入对应参数：

<img src="/kimi/app-config.png" alt="Kimi App 填报示范" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

---

* 下一步：前往 **[App 内参数填报说明](/tutorial/app-config)** 查看如何在手机中测试连接。
