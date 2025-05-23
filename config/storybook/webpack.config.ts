import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule) => (
        /svg/.test(rule.test as string)
            ? { ...rule, exclude: /\.svg$/i }
            : rule
    ));
    // config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    //     if (/svg/.test(rule.test as string)) {
    //         return { ...rule, exclude: /\.svg$/i };
    //     }

    //     return rule;
    // });

    /* исправление ошибки storybook */
    // if (config!.resolve!.modules) {
    // config!.resolve!.modules = [
    //     path.resolve(__dirname, '../../src'),
    //     'node_modules',
    // ];
    // }

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules.push(buildCssLoader(true));

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
