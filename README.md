# YourOnly.One [Hugo](https://gohugo.io) Defaults
This is a collection of Hugo partials, overrides, and other files that makes up the "default setting" for sites in and by [YourOnly.One](https://YourOnly.One).

> ***This is not a standalone theme. This is a Hugo theme component.***

## Setup
1. Add YourOnly.One Hugo Defaults git in your Hugo project:
    * Method 1: git submodule
        ```shell
        cd your-hugo-project
        git submodule add https://github.com/techmagus/youronlyone-hugo-defaults.git themes/youronlyone-hugo-defaults
        ```
        * To update:
          ```shell
          cd your-hugo-project
          git submodule update --remote --merge themes/youronlyone-hugo-defaults
          ```

    * Method 2: git clone
        ```shell
        cd your-hugo-project
        git clone https://github.com/techmagus/youronlyone-hugo-defaults.git themes/youronlyone-hugo-defaults
        ```
        * To update:
          ```shell
          cd your-hugo-project/themes/youronlyone-hugo-defaults
          git pull
          ```
1. Add `youronlyone-hugo-defaults` in your project:

    `config.toml`:
    ```toml
    theme = ["youronlyone-hugo-defaults", "my-theme"]
    ```
    `config.yaml`:
    ```yaml
    theme:
      - youronlyone-hugo-defaults
      - my-theme
    ```

## Archetypes
* Default
* Reviews

## i18n
* `en-PH` (English Philippines)
* `ja` (Nihongo / Japanese)
* `ko` (Hangugeo / Korean)

## Partials
* `youronly.one-head-01-top.html`
* `youronly.one-head-02-btm.html`
* `youronly.one-head-03-custom-theme.html`
* `youronly.one-body-01-top.html`

## Overrides
* `list.rss.xml`
* `sitemap.xml`
* `sitemapindex.xml`

### Changes in `list.rss.xml`

### Changes in `sitemap.xml`

### Changes in `sitemapindex.xml`

