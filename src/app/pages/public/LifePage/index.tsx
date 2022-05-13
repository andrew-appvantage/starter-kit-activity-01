import { Descriptions, Tag } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetLifeQuery } from '../../../api';
import LoadingElement from '../../../components/LoadingElement';
import BasicLayout from '../../../layouts/BasicLayout';
import NotFoundResult from '../NotFoundPage';

const LifePage = () => {
    const { id } = useParams();
    const { data, loading } = useGetLifeQuery({ variables: { id } });

    if (loading) {
        return <LoadingElement />;
    }
    if (!data || !data.getLife) {
        return <NotFoundResult />;
    }

    const life = data.getLife;

    return (
        <BasicLayout>
            {data && (
                <Descriptions title="Life Info">
                    <Descriptions.Item label="FullName">{life.fullName}</Descriptions.Item>
                    <Descriptions.Item label="Birthday">
                        {new Date(life.birthday).toLocaleDateString()}
                    </Descriptions.Item>
                    <Descriptions.Item label="Title">{life.title}</Descriptions.Item>
                    <Descriptions.Item label="Description">{life.description}</Descriptions.Item>
                    <Descriptions.Item label="Hobbies">
                        {life.hobbies.map((tag, i) => {
                            const color = i % 2 === 0 ? 'geekblue' : 'green';

                            return (
                                <Tag key={`${tag}${life.fullName}`} color={color}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </Descriptions.Item>
                </Descriptions>
            )}
        </BasicLayout>
    );
};

export default LifePage;
