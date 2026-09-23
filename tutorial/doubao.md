---
title: 豆包 (火山引擎) 配置指南
---

# 🚀 豆包 (字节跳动 / 火山引擎方舟) 配置指南

> **推荐指数**：⭐⭐⭐⭐  
> **特点**：字节跳动旗下大模型，国内访问响应极快，新用户赠送海量免费 Token 额度。

---

## 📋 申请步骤概览

豆包（火山方舟）相比其他平台稍有不同，需要获取两项参数：
1. **API Key**（访问凭据）
2. **Endpoint ID**（接入点 ID，用于指定模型）

---

## 📸 详细图文操作指南

### 第一部分：获取 API Key

#### 1. 进入 API Key 管理
登录 [火山引擎方舟控制台](https://console.volcengine.com/ark/)，在左侧导航栏点击 **API Key 管理**，然后点击 **+ 创建 API Key**：

<img src="/doubao/step1.png" alt="火山方舟创建 API Key 入口" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 2. 填写名称并生成密钥
在弹窗中填写名称（如 `成长小记-ai报告`），权限选择“全部”，点击 **创建** 并妥善保存生成的密钥：

<img src="/doubao/step2.png" alt="生成火山方舟 API Key" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

---

### 第二部分：创建在线推理接入点并获取 Endpoint ID

#### 3. 进入推理菜单
在左侧菜单点击 **推理**：

<img src="/doubao/step3.png" alt="左侧菜单推理" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 4. 进入模型推理接入点
点击 **在线推理**，并切换到 **模型推理接入点**：

<img src="/doubao/step4.png" alt="进入在线推理模型接入点" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 5. 填写接入点并添加模型
输入接入点名称（例如 `成长小记-ai报告`），推理模式保持默认，点击下方的 **+ 添加模型**：

<img src="/doubao/step5.png" alt="添加模型" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 6. 选择豆包旗舰大模型
推荐选择 **Doubao-Seed-2.1-pro**（每个模型官方赠送 50万 Tokens 免费额度），勾选最新版本，点击右下角 **确定**：

<img src="/doubao/step6.png" alt="选择 Doubao 模型" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 7. 确认配置并创建
接入模式保持默认的“按 Token 付费”，点击右下角的 **创建并接入** 按钮：

<img src="/doubao/step7.png" alt="创建并接入" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 8. 复制专属 Endpoint ID
创建成功后，在接入点列表中找到刚才创建的项目，**复制以 `ep-` 开头的文本**（这将在 App 中作为“模型名称”填入）：

<img src="/doubao/step8.png" alt="复制 ep- 开头的 Endpoint ID" style="border-radius: 8px; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

---

## 📌 App 内填报参数对照

| 配置项 | 填报内容 | 说明 |
| :--- | :--- | :--- |
| **API Key (密钥)** | `xxxxxxxx-xxxx-xxxx-xxxx` | 刚才复制的火山引擎 API Key |
| **接口地址 (Base URL)** | `https://ark.cn-beijing.volces.com/api/v3` | 火山引擎方舟标准接口地址 |
| **模型名称 (Model Name)** | `ep-xxxxxxxxxxxxxx-xxxxx` | 填入你刚才复制的 **Endpoint ID**（以 `ep-` 开头） |


---

* 下一步：前往 **[App 内参数填报说明](/tutorial/app-config)** 查看如何在手机中测试连接。
