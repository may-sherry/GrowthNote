---
title: DeepSeek (深度求索) 配置指南
---

# 🌟 DeepSeek (深度求索) 配置指南

> **推荐指数**：⭐⭐⭐⭐⭐  
> **特点**：性价比极高、推理与逻辑分析能力极强，非常适合做深度ai复盘。

---

## 📋 申请步骤

1. 打开浏览器，访问 [DeepSeek 开放平台](https://platform.deepseek.com/) 并注册/登录账号。
2. 进入控制台，点击左侧菜单栏的 **API keys**。
3. 点击 **创建 API key** 按钮，给 Key 命名（例如：`成长小记`），点击生成。
4. **复制生成的密钥字符串**（注意：密钥只显示一次，请及时复制保存）。

::: warning ⚠️ 关键提醒：检查账户余额
获取 API Key 后，请在控制台左侧进入 **充值** 查看账户状态，确保**账户可用余额大于 0 元**。  
若账户余额为 0.00 元且无赠送体验金，平台将直接拒绝响应（报 402/欠费错误），导致 App 内无法成功生成 AI 报告。
:::

---

## 📸 步骤图文参考

### 步骤 1：进入 API keys 页面
打开 DeepSeek 控制台，左侧菜单选择 **API keys**，点击右侧的 **创建 API key** 按钮：

<img src="/deepseek/step1.png" alt="DeepSeek 控制台创建 API Key" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

### 步骤 2：输入名称并生成密钥
在弹出窗口中填写名称（如 `成长小记-ai报告`），点击 **创建** 并及时复制保存生成的 Key：

<img src="/deepseek/step2.png" alt="生成 DeepSeek API Key" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

---

## 📌 App 内填报参数对照

| 配置项 | 填报内容 | 说明 |
| :--- | :--- | :--- |
| **API Key (密钥)** | `sk-xxxxxxxxxxxxxxxx` | 刚才复制的 DeepSeek 密钥 |
| **接口地址 (Base URL)** | `https://api.deepseek.com` | 官方标准接口地址 |
| **模型名称 (Model Name)** | `deepseek-flash` | 推荐填入的模型名称 |

---

* 下一步：前往 **[App 内参数填报说明](/tutorial/app-config)** 查看如何在手机中测试连接。
