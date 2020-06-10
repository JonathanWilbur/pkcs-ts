# __PROJECT_TITLE__

* Author: [Jonathan M. Wilbur](https://github.com/JonathanWilbur) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2020
* License: [MIT License](https://mit-license.org/)

Be sure to correct information in:

- `README.md` (This file.)
- `package.json`
- `webpack.config.js`
- `Jenkinsfile` (Specifically, the `url` for the Git repository.)
- `./test/testpage.html`
- `Dockerfile`
- `docker-compose.yaml`

## To Do

- [ ] Complexity Reporting
  - I like [this package](https://www.npmjs.com/package/grunt-complexity) for
    this, but I am not keen on installing Grunt just for this.
- [ ] Profiling
- [x] Benchmarking
- [ ] Commit Sign-Off
- [x] ~~GitHub actions to prevent secret commits~~ None adequate.
- [x] Only install production dependencies in container and in Jenkins jobs
- [ ] Add `.npmignore`
- [ ] Update `.funcignore`
- [ ] Update `.eslintignore`

## Check out these GitHub Actions and Apps

They may be useful, depending on what this becomes.

- https://github.com/marketplace/actions/shellcheck
- https://github.com/marketplace/actions/dipshit-kubeval
- https://github.com/marketplace/actions/xml-lint
- https://github.com/marketplace/actions/docker-lint
- https://github.com/marketplace/actions/single-node-kubernetes-cluster
- https://github.com/marketplace/actions/yaml-lint
- https://github.com/marketplace/actions/run-jest
- https://github.com/marketplace/actions/readable-readme
- https://github.com/marketplace/actions/alcide-advisor-kubernetes-scan
- https://github.com/marketplace/actions/secret-scan
- https://github.com/marketplace/actions/404-links
- https://github.com/marketplace/actions/validate-json
- https://github.com/marketplace/actions/send-email
- https://github.com/apps/dco (This provides Commit Sign-Off)
- https://github.com/marketplace/create-issue-branch
- https://github.com/marketplace/auto-branch
- https://github.com/marketplace/auto-add-label
- https://github.com/marketplace/semantic-pr-title
- https://github.com/marketplace/js-bundle-analyzer

## Known Issues

- Running `npm run lint` only works on Posix hosts, because the single quotes
  get escaped on Windows. If you have the ESLint plugin installed and
  configured, you should still be able to get live linting on Windows.
