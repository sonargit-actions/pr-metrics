# Pull Request Info Capture Action

This GitHub Action captures detailed information about a pull request whenever it is **opened**, **closed**, or **reopened**. The collected data can be logged, processed, or sent as a POST request to tools like [SonarGit](https://sonargit.com) for actionable insights.

---

## 🚀 Features

- Automatically triggered on pull request events: `opened`, `closed`, and `reopened`.
- Captures pull request metadata such as branch name, and dates as to when a PR was opened, closed and merged.
- Outputs the data as a JSON object for easy integration into other workflows.
- Can integrate seamlessly with [SonarGit](https://sonargit.com) for insights and analysis (Optional)

---

## 📂 Examples

An example usage of this action is available in the [examples](log-action/example/) folder.

### Basic Example

Add this action to your repository’s workflow file (e.g., `.github/workflows/pr-info-capture.yml`):

```yaml
name: Capture Pull Request Info

on:
  pull_request:
    types: [opened, closed, reopened]
    # usually main or master, depending on your repo
    branches: [main]

jobs:
  capture-pr-info:
    runs-on: ubuntu-latest
    steps:
      - name: Collect Metrics
        uses: sonargit-actions/pr-metrics/actions/pr-metrics@v1
        with:
          # optional url for capturing data sent as POST request
          # metrics-api: ${{vars.METRICS_API}}
          log-results: true
```



