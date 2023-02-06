#!/usr/bin/env bash
set -euxo pipefail

# base path defaults to an empty string
BASE_PATH=${BASE_PATH:-}

# the sass file to update the base path in
sass_file=assets/stylesheets/uswds-settings.scss

# next.js doesn't support prepending sass URLs with the configured assetPrefix.
# There's probably some terrible way to support this with webpack (see
# https://github.com/vercel/next.js/discussions/36349) but I'm just going to be
# a caveman and insert it with sed
#
# This command sets the ASSET_PREFIX variable in uswds-settings.scss
#
# (The -ibak tells sed to edit the file in place but also back it up to *.bak,
# we have to do this due to BSD and GNU sed differences in the -i argument)
sed -i.bak $"s,ASSET_PREFIX: \".*,ASSET_PREFIX: \"$BASE_PATH\";," "$sass_file"

# remove the backup file we had to create
rm "$sass_file.bak"

# now build and export the static site
node_modules/.bin/next build
node_modules/.bin/next export
