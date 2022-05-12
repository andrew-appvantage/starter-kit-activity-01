import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BasicLayout from '../../../layouts/BasicLayout';
import { useGetLifeLazyQuery } from '../../../api';
import NotFoundResult from '../NotFoundPage';
import LoadingElement from '../../../components/LoadingElement';
import { Descriptions, Tag } from 'antd';

const LifePage = () => {
    const { id } = useParams();
    console.log('id: ', id);
    const [fetch, { data, loading }] = useGetLifeLazyQuery();

    useEffect(() => {
        fetch({ variables: { id } });
    }, []);

    if (loading) return <LoadingElement />;
    if (!data) return <NotFoundResult />;
    console.log('data: ', data);
    return (
        <BasicLayout>
            {data && (
                <Descriptions title="Life Info">
                    <Descriptions.Item label="FullName">{data?.getLife?.fullName}</Descriptions.Item>
                    <Descriptions.Item label="Birthday">{data?.getLife?.birthday}</Descriptions.Item>
                    <Descriptions.Item label="Title">{data?.getLife?.title}</Descriptions.Item>
                    <Descriptions.Item label="Description">{data?.getLife?.description}</Descriptions.Item>
                    <Descriptions.Item label="Hobbies">
                        {data?.getLife?.hobbies.map((tag, i) => {
                            let color = i % 2 === 0 ? 'geekblue' : 'green';
                            return (
                                <Tag color={color} key={tag}>
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
