# AutoPart Platform — Architecture

## 1. Project Overview

AutoPart is a multi-application auto-parts platform consisting of:

- Customer Marketplace
- Business ERP
- Platform Admin
- Backend Microservices

The system is designed as a monorepo.

---

## 2. Repository Structure

```text
auto-part/
│
├── apps/
│   ├── customer/
│   ├── erp/
│   └── admin/
│
├── shared/
│   ├── ui/
│   ├── types/
│   ├── validation/
│   └── utils/
│
├── services/
│
├── infrastructure/
│
└── docs/
```
