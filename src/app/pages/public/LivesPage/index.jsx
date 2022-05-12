import BasicLayout from '../../../layouts/BasicLayout';
import { Table, Tag, Space } from 'antd';
import { useGetListOfLifeLazyQuery } from '../../../api';
import { useEffect } from 'react';
import LoadingElement from '../../../components/LoadingElement';

const columns = [
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Full Name',
        dataIndex: 'fullName',
        key: 'fullName',
    },
    {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Hobbies',
        dataIndex: 'hobbies',
        key: 'hobbies',
        render: tags => (
            <>
                {tags.map((tag, i) => {
                    let color = i % 2 === 0 ? 'geekblue' : 'green';
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

const LivesPage = () => {
    const [fetch, { data, loading }] = useGetListOfLifeLazyQuery();

    useEffect(() => {
        fetch();
    }, []);
    
    if (loading) return <LoadingElement />;

    return (
        <BasicLayout>
            <Table columns={columns} dataSource={data?.listLives} rowKey="fullName" />
        </BasicLayout>
    );
};

export default LivesPage;
