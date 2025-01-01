# Pull Request Info Capture Action

This GitHub Action captures detailed information about a pull request whenever it is **opened**, **closed**, or **reopened**. The collected data can be logged, processed, or sent as a POST request to tools like [SonarGit](https://sonargit.com) for actionable insights.

---

## 🚀 Features

- Automatically triggered on pull request events: `opened`, `closed`, and `reopened`.
- Captures pull request metadata such as title, description, author, labels, and more.
- Outputs the data as a JSON object for easy integration into other workflows.
- Integrates seamlessly with [SonarGit](https://sonargit.com) for insights and analysis.

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
    branches: [main]

jobs:
  capture-pr-info:
    runs-on: ubuntu-latest
    steps:
      - name: Collect Metrics
        uses: sonar-git/pr-metrics/actions/pr-metrics@v1
        with:
          # metrics-api: ${{vars.METRICS_API}}
          log-results: true
