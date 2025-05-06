import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticlesDetailsPage/model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.articlesDetailsPage, {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>

            <div className={classNames(cls.articlesDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title={t('Commentary')} className={cls.commentTitle} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesDetailsPage);
