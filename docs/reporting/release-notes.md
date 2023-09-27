---
sidebar_position: 7
---

# Release Notes

### 2023-09-27
We have included additional information about the [Transition to One Platform](https://developer.mobilepay.dk/docs/reporting/transition-to-one-platform) and how it affects the Reporting API including a link to the [migration guide](https://developer.vippsmobilepay.com/docs/mp-migration-guide/reporting/)to ease your transition. We strongly recommend that you review it.



### 2022-09-20
Added `sortdirection` query parameter to [get transactions](/api/reporting#operation/get-transactions) and [get transfers](/api/reporting#operation/get-transfers) endpoints in [Reporting V3 API](/api/reporting). Change is backwards compatible - not providing a value is treated the same as `desc`.
