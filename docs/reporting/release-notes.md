---
sidebar_position: 9
---

# Release Notes

### 2022-09-20
Added `sortdirection` query parameter to [get transactions](/api/reporting#operation/get-transactions) and [get transfers](/api/reporting#operation/get-transfers) endpoints in [Reporting V3 API](/api/reporting). Change is backwards compatible - not providing a value is treated the same as `desc`.